import { prisma } from "../db.config.js";

export const editRestData = async (data, params) => {
  const restId = await prisma.restaurant.findFirst({ where: { id: params } });
  if (!restId) {
    return { error: "NO_REST_DATA" };
  }
  const updateRestData = await prisma.restaurant.update({ data: data });
  console.log(updateRestData);
};
