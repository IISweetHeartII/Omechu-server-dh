import { prisma } from "../db.config.js";

export const getReviewData = async (data) => {
  if (
    !data ||
    data.rest_id === 0 ||
    data.limit === undefined ||
    data.cursor === undefined
  ) {
    return { error: "NO_PARAMS" };
  }

  const pageSize = parseInt(data.limit);
  const isFirstPage = data.cursor === 0;
  const reviews = await prisma.review.findMany({
    select: {
      id: true,
      rating: true,
      tag: true,
      text: true,
      created_at: true,
      like: true,
      user: { select: { nickname: true } },
      review_image: { select: { link: true } },
    },
    where: {
      rest_id: data.rest_id,
    },
    orderBy: { created_at: "asc" },
    take: pageSize + 1,
    ...(isFirstPage
      ? {}
      : {
          cursor: { id: data.cursor },
          skip: 1,
        }),
  });

  if (!reviews || reviews.length === 0) {
    return { error: "NO_RES_DATA" };
  }
  const restTag = await prisma.rest_tag.findMany({
    where: { rest_id: data.rest_id },
    orderBy: { count: "desc" },
    take: 3,
  });
  const reviewCount = await prisma.review.count({
    where: { rest_id: data.rest_id },
  });
  const avgRating = await prisma.review.aggregate({
    where: { rest_id: data.rest_id },
    _avg: { rating: true },
  });
  const hasNextPage = reviews.length > pageSize;
  const slicedReviews = hasNextPage ? reviews.slice(0, pageSize) : reviews;
  const nextCursor = hasNextPage
    ? slicedReviews[slicedReviews.length - 1].id
    : null;
  return {
    data: slicedReviews,
    mostThreeTag: restTag,
    allReviewCount: reviewCount,
    avgRating: avgRating._avg,
    hasNextPage,
    nextCursor,
  };
};
