import { prisma } from "../db.config.js";
export const searchRestaurant = async (menu, location, category) => {
  console.log(menu, location, category);
  const locationFilters = location.map((loc) => ({
    location: { contains: loc, mode: "insensitive" },
  }));
  const tagFilters = category.map((cat) => ({
    tag: { contains: cat, mode: "insensitive" },
  }));
  const restaurants = await prisma.restaurant.findMany({
    where: {
      AND: [
        category.length > 0
          ? {
              rest_tags: {
                some: {
                  OR: tagFilters,
                },
              },
            }
          : {},
        {
          repre_menu: {
            some: {
              contains: menu,
              mode: "insensitive",
            },
          },
        },
        location.length > 0 ? { OR: locationFilters } : {},
      ],
    },
  });
  console.log("restaurants", restaurants);
};
