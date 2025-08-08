import { prisma } from "../db.config.js";
export const searchRestaurant = async (
  menu,
  location,
  tag,
  userId,
  cursor,
  limit
) => {
  console.log("menu", menu.length);
  const isFirstPage = cursor == 0;
  const locationFilters = Array.isArray(location)
    ? location?.map((loc) => ({
        location: { contains: loc },
      }))
    : [
        {
          location: { contains: location },
        },
      ];
  const tagFilters = Array.isArray(tag)
    ? tag.map((cat) => ({
        tag: { contains: cat },
      }))
    : [
        {
          tag: { contains: tag },
        },
      ];
  const restData = await prisma.restaurant.findMany({
    select: {
      id: true,
      rest_image: true,
      name: true,
      address: true,
      rating: true,
      rest_tag: {
        select: { tag: true, count: true },
        take: 3,
        orderBy: { count: "desc" },
      },
      repre_menu: {
        select: { menu: true },
      },
      zzim: {
        select: { id: true, rest_id: true },
        where: { user_id: userId },
      },
      _count: {
        select: { review: true },
      },
    },
    where: {
      AND: [
        tagFilters.length > 1
          ? {
              rest_tag: {
                some: {
                  OR: tagFilters,
                },
              },
            }
          : {
              rest_tag: {
                some: {
                  tag: tagFilters.tag,
                },
              },
            },
        menu.length > 0
          ? {
              repre_menu: {
                some: {
                  menu: {
                    contains: menu,
                  },
                },
              },
            }
          : {},
        location.length > 0 ? { OR: locationFilters } : {},
      ],
    },
    take: limit + 1,
    ...(isFirstPage ? {} : { cursor: { id: BigInt(cursor) }, skip: 1 }),
  });
  if (restData.length == 0) {
    return { error: "NO_DATA" };
  }
  const newRestData = restData.map((data) => {
    return { ...data, zzim: data.zzim.length > 0 };
  });
  console.log("restData", restData);
  const hasNextPage = newRestData.length > limit;
  const lastData = hasNextPage
    ? newRestData[limit - 1].id.toString()
    : newRestData[newRestData.length - 1]?.id.toString();
  const nextCursor = hasNextPage ? lastData : null;
  const sliceRestData = newRestData.slice(0, limit).map((rest) => ({
    ...rest,
    id: rest.id.toString(),
  }));

  return {
    restData: sliceRestData,
    hasNextPage: hasNextPage,
    nextCursor: nextCursor,
  };
};
