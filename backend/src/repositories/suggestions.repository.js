import { prisma } from "../db.config.js";

export const getData = async (data) => {
  if (data == null) {
    return { error: "NO_PARAMS" };
  }
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
  if (menuData.length == 0) {
    return { error: "NO_DATA" };
  }
  return menuData;
};
