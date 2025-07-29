import { prisma } from "../db.config.js";
import axios from "axios";
export const editRestData = async (newData, params, userId) => {
  var locationData;
  var addressData;

  const restData = await prisma.restaurant.findFirst({
    where: { id: params },
  });
  console.log(restData);
  if (!restData) {
    return { error: "NO_REST_DATA" };
  }
  const restUserData = await prisma.user_rest.findFirst({
    where: { rest_id: params },
  });
  console.log("restUserData", restUserData);
  if (restUserData === null) {
    return { error: "NO_DATA" };
  } else if (restUserData.user_id.toString() !== userId) {
    return { error: "NOT_YOUR_REST" };
  }

  if (restData.address != newData.address) {
    const newAddressDate = await axios.get(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        newData.address
      )}`,
      {
        headers: { Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}` },
      }
    );
    if (newAddressDate.data.documents.length === 0) {
      return { error: "NO_ADDRESS" };
    }
    locationData =
      `${newAddressDate.data.documents[0].address.region_1depth_name} ${newAddressDate.data.documents[0].address.region_2depth_name} ${newAddressDate.data.documents[0].address.region_3depth_name}`.trim();
    addressData = newData.address;
  } else {
    locationData = restData.location;
    addressData = restData.address;
  }

  const updateRestData = await prisma.restaurant.update({
    where: { id: params },
    data: {
      rest_image: newData.imageUrl,
      name: newData.name,
      location: locationData,
      address: addressData,
      monday: newData.opening_hour.monday,
      tuesday: newData.opening_hour.tuesday,
      wednesday: newData.opening_hour.wednesday,
      thursday: newData.opening_hour.thursday,
      friday: newData.opening_hour.friday,
      saturday: newData.opening_hour.saturday,
      sunday: newData.opening_hour.sunday,
      google_place_id: newData.google_place_id,
    },
  });

  if (!updateRestData) {
    return { error: "CANT_UPDATE" };
  }
  const deleteRepreMenu = await prisma.repre_menu.deleteMany({
    where: { rest_id: params },
  });

  const addRepreMenu = await Promise.all(
    newData.repre_menu.map((repreData) => {
      return prisma.repre_menu.create({
        data: { rest_id: params, menu: repreData },
      });
    })
  );
  return { id: updateRestData.id.toString(), user_id: userId, rest_id: params };
};
