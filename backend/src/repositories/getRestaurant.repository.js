import { prisma } from "../db.config.js";

export const getRestData = async (location, keyword, cursor, limit) => {
  let restData;
  let hasNextPage;
  let nextCursor;
  let lastData;
  const isFirstPage = cursor == 0;
  let sliceRestData;

  if (location.length === 0 && keyword.length === 0) {
    restData = await prisma.restaurant.findMany({
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
      },
      take: limit + 1,
      ...(isFirstPage ? {} : { cursor: { id: BigInt(cursor) }, skip: 1 }),
    });
    hasNextPage = restData.length > limit;
    lastData = hasNextPage
      ? restData[limit - 1].id.toString()
      : restData[restData.length - 1]?.id.toString();
    nextCursor = hasNextPage ? lastData : null;
    sliceRestData = restData.slice(0, limit).map((rest) => ({
      ...rest,
      id: rest.id.toString(),
    }));
    return {
      restData: sliceRestData,
      hasNextPage: hasNextPage,
      nextCursor: nextCursor,
    };
  }

  if (keyword.length === 0) {
    restData = await prisma.restaurant.findMany({
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
      },
      where: {
        location: { in: location },
      },
      take: limit + 1,
      ...(isFirstPage ? {} : { cursor: { id: BigInt(cursor) } }),
      skip: 1,
    });

    hasNextPage = restData.length > limit;
    lastData = hasNextPage
      ? restData[limit - 1].id.toString()
      : restData[restData.length - 1]?.id.toString();
    nextCursor = hasNextPage ? lastData : null;
    sliceRestData = restData.slice(0, limit).map((rest) => ({
      ...rest,
      id: rest.id.toString(),
    }));
    return {
      restData: sliceRestData,
      hasNextPage: hasNextPage,
      nextCursor: nextCursor,
    };
  }

  if (location.length === 0) {
    const keywords = keyword;

    restData = await prisma.$queryRawUnsafe(
      `
    SELECT r.id, r.name, r.rest_image, r.address, r.rating, COUNT(rt.tag) AS match_score
    FROM restaurant r
    JOIN rest_tag rt ON rt.rest_id = r.id
    WHERE rt.tag IN (${keywords.map(() => "?").join(", ")})
    GROUP BY r.id, r.name, r.rest_image, r.address, r.rating
    ${cursor ? "HAVING MAX(r.id) > ?" : ""}
    ORDER BY match_score DESC, r.id ASC
    LIMIT ?;
    `,
      ...keywords,
      ...(cursor ? [cursor] : []),
      limit + 1
    );

    hasNextPage = restData.length > limit;
    lastData = hasNextPage
      ? restData[limit - 1].id.toString()
      : restData[restData.length - 1]?.id.toString();
    nextCursor = hasNextPage ? lastData : null;
    sliceRestData = restData.slice(0, limit);

    const restaurantIds = sliceRestData.map((r) => r.id);

    const matchedTags = await prisma.rest_tag.findMany({
      where: {
        rest_id: { in: restaurantIds },
        OR: keywords.map((kw) => ({ tag: { contains: kw } })),
      },
      orderBy: { count: "desc" },
    });

    const tagMap = new Map();
    for (const tag of matchedTags) {
      const current = tagMap.get(tag.rest_id) || [];
      if (current.length < 3) current.push({ tag: tag.tag, count: tag.count });
      tagMap.set(tag.rest_id, current);
    }

    const finalData = sliceRestData.map((rest) => ({
      id: rest.id.toString(),
      name: rest.name,
      rest_image: rest.rest_image,
      address: rest.address,
      rating: rest.rating,
      match_score: Number(rest.match_score),
      rest_tag: tagMap.get(rest.id) || [],
    }));

    return {
      restData: finalData,
      hasNextPage,
      nextCursor,
    };
  }

  // location이 존재할 경우
  const baseQuery = `
  SELECT r.id, r.name, r.rest_image, r.address, r.rating,
         SUM(CASE WHEN rt.tag IN (${keyword
           .map(() => "?")
           .join(", ")}) THEN 1 ELSE 0 END) AS match_score
  FROM restaurant r
  LEFT JOIN rest_tag rt ON rt.rest_id = r.id
  WHERE r.location IN (${location.map(() => "?").join(", ")})
  ${cursor ? "AND r.id > ?" : ""}
  GROUP BY r.id, r.name, r.rest_image, r.address, r.rating
  ORDER BY match_score DESC, r.id ASC
  LIMIT ?;
`;

  restData = await prisma.$queryRawUnsafe(
    baseQuery,
    ...keyword,
    ...location,
    ...(cursor ? [cursor] : []),
    limit + 1
  );

  hasNextPage = restData.length > limit;
  lastData = hasNextPage
    ? restData[limit - 1].id.toString()
    : restData[restData.length - 1]?.id.toString();
  nextCursor = hasNextPage ? lastData : null;
  sliceRestData = restData.slice(0, limit);

  const restaurantIds = sliceRestData.map((r) => r.id);

  const matchedTags = await prisma.rest_tag.findMany({
    where: {
      rest_id: { in: restaurantIds },
      OR: keyword.map((kw) => ({ tag: { contains: kw } })),
    },
    orderBy: { count: "desc" },
  });

  const tagMap = new Map();
  for (const tag of matchedTags) {
    const current = tagMap.get(tag.rest_id) || [];
    if (current.length < 3) current.push({ tag: tag.tag, count: tag.count });
    tagMap.set(tag.rest_id, current);
  }

  const finalData = sliceRestData.map((rest) => ({
    ...rest,
    id: rest.id.toString(),
    match_score: Number(rest.match_score),
    rest_tag: tagMap.get(rest.id) || [],
  }));

  return {
    restData: finalData,
    hasNextPage,
    nextCursor,
  };
};
