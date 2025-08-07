import { prisma } from "../db.config.js";

export const getData = async (data) => {
  console.log(data);
  const menuData = await prisma.repre_menu.findMany({
    select: {
      menu: true,
    },
    where: {
      menu: {
        contains: data,
      },
    },
    distinct: ["menu"],
    orderBy: { menu: "asc" },
  });
  return menuData;
};
