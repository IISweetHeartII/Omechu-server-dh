import { prisma } from "../db.config.js";
import axios from "axios";
export const editRestData = async (data, params) => {
  var locationData;
  const restData = await prisma.restaurant.findFirst({ where: { id: params } });
  console.log(restData);
  if (!restData) {
    return { error: "NO_REST_DATA" };
  }
  if (restData.address === data.address && restData.name === data.name) {
    return { error: "DUPLICATED_REST" };
  }

  if (restData.address != data.address) {
    const newAddressDate = await axios.get(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        data.address
      )}`,
      {
        headers: { Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}` },
      }
    );
    if (!newAddressDate) {
      return { error: "NO_ADDRESS" };
    }
    locationData =
      `${newAddressDate.data.documents[0].address.region_1depth_name} ${newAddressDate.data.documents[0].address.region_2depth_name} ${newAddressDate.data.documents[0].address.region_3depth_name}`.trim();
  } else {
    locationData = data.address;
  }
  const updateRestData = await prisma.restaurant.update({
    where: { id: params },
    data: {
      rest_image: data.imageUrl,
      name: data.name,
      location: locationData,
      address: data.address,
      monday: data.opening_hour.monday,
      tuesday: data.opening_hour.tuesday,
      wednesday: data.opening_hour.wednesday,
      thursday: data.opening_hour.thursday,
      friday: data.opening_hour.friday,
      saturday: data.opening_hour.saturday,
      sunday: data.opening_hour.sunday,
      google_place_id: data.google_place_id,
    },
  });
  const deleteRepreMenu = await prisma.repre_menu.deleteMany({
    where: { rest_id: params },
  });
  const addRepreMenu = await Promise.all(
    data.repre_menu.map((repreData) => {
      return prisma.repre_menu.create({
        data: { rest_id: params, menu: repreData },
      });
    })
  );
};
