import { prisma } from "../db.config.js";

export const changeLike = async ({ data, restId, reviewId }) => {
  if (!data) {
    return { error: "NO_PARAMS" };
  }
  const reviewData = await prisma.review.findFirst({
    where: { id: reviewId, rest_id: restId },
  });
  if (!reviewData) {
    return { error: "NO_INCORRECT_DATA" };
  }
  if (data.like == false) {
    if (reviewData.like <= 0) {
      return { error: "CANT_CHANGE" };
    } else {
      const addLikeData = await prisma.review.update({
        data: { like: { decrement: 1 } },
        where: { id: reviewId, rest_id: restId },
      });
      return addLikeData;
    }
  } else {
    const deleteLikeData = await prisma.review.update({
      data: { like: { increment: 1 } },
      where: { id: reviewId, rest_id: restId },
    });
    return deleteLikeData;
  }
};
