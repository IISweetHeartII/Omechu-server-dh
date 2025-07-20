import { prisma } from "../db.config.js";

export const addReviewData = async (data) => {
  console.log(data);
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
  const reviewImageId = await Promise.all(
    data.imageUrl.map((url) => {
      return prisma.review_image.create({
        data: { review_id: reviewId.id, link: url },
      });
    })
  );

  if (!reviewId || !reviewImageId) {
    return { error: "ADD_REVIEW_OR_IMAGE_ERROR" };
  } else {
    return reviewId;
  }
};
