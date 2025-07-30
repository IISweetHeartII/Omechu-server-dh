import { prisma } from "../db.config.js";

export const addReviewData = async (data) => {
  console.log("data", data);
  const userId = await prisma.user.findFirst({ where: { id: data.userId } });
  if (!userId) {
    return { error: "NO_USER" };
  }
  const restId = await prisma.restaurant.findFirst({
    where: { id: data.restId },
  });
  if (!restId) {
    return { error: "NO_REST" };
  }
  if (!data.imageUrl) {
    return { error: "NO_IMAGE_URL" };
  }

  const reviewId = await prisma.review.create({
    data: {
      user_id: data.userId,
      rest_id: data.restId,
      rating: data.rating,
      tag: data.tag,
      text: data.reviewText,
    },
  });
  console.log("reviewId", reviewId);
  const reviewImageId = await Promise.all(
    data.imageUrl.map((url) => {
      return prisma.review_image.create({
        data: {
          review_id: BigInt(reviewId.id),
          link: url,
          rest_id: BigInt(reviewId.rest_id),
        },
      });
    })
  );
  console.log("reviewImageId", reviewImageId);
  const updateTag = await Promise.all(
    data.tag.map(async (unit) => {
      const restTag = await prisma.rest_tag.upsert({
        where: { tag_rest_id: { rest_id: data.restId, tag: unit } },
        create: { rest_id: data.restId, tag: unit },
        update: { count: { increment: 1 } },
      });
    })
  );

  if (!reviewId || !reviewImageId) {
    return { error: "ADD_REVIEW_OR_IMAGE_ERROR" };
  } else {
    return reviewId;
  }
};
