import { prisma } from "../db.config.js";
import axios from "axios";
export const addRestData = async (restData) => {
  if (
    !restData ||
    !(
      restData.imageUrl &&
      restData.name &&
      restData.repreMenu &&
      restData.opening_hour &&
      restData.address
    )
  ) {
    return { error: "NO_PARAMS" };
  }
  const findDuplicatedRest = await prisma.restaurant.findFirst({
    select: { id: true, name: true },
    where: { name: restData.name, address: restData.address },
  });
  if (findDuplicatedRest === null) {
    const { data } = await axios.get(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        restData.address
      )}`,
      {
        headers: { Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}` },
      }
    );

    if (data.documents.length == 0) {
      return { error: "WRONG_ADDRESS" };
    }
    const location =
      `${data.documents[0].road_address.region_1depth_name}특별시 ${data.documents[0].road_address.region_2depth_name} ${data.documents[0].road_address.region_3depth_name}`.trim();

    const restId = await prisma.restaurant.create({
      data: {
        location: location,
        name: restData.name,
        address: restData.address,
        monday: restData.opening_hour.monday,
        tuesday: restData.opening_hour.tuesday,
        wednesday: restData.opening_hour.wednesday,
        thursday: restData.opening_hour.thursday,
        friday: restData.opening_hour.friday,
        saturday: restData.opening_hour.saturday,
        sunday: restData.opening_hour.sunday,
      },
    });
    if (!restId || !restId.id) {
      return { error: "CANT_ADD_REST" };
    }
    const restRepreMenu = await Promise.all(
      restData.repreMenu.map((menuData, index) => {
        const menu = menuData[`repreMenu${index}`];
        return prisma.repre_menu.create({
          data: { rest_id: restId.id, menu: menu },
        });
      })
    );
    if (!restRepreMenu) {
      return { error: "CANT_ADD_REPRE_MENU" };
    } else {
      return restId;
    }
  } else {
    return { error: "DUPLICATED_REST" };
  }
};
