import { getReviewData } from "../repositories/getReview.repository.js";
import { NoParams, NoRestData } from "../errors.js";
import { responseFromGetReview } from "../dtos/getReview.dto.js";
export const getReview = async (data) => {
  const reviewData = await getReviewData(data);
  if (reviewData.error === "NO_PARAMS")
    throw new NoParams("파라미터가 없습니다.", data);
  if (reviewData.error === "NO_RES_DATA")
    throw new NoRestData("해당 가게의 리뷰가 없습니다", data);

  return responseFromGetReview({
    reviewData: reviewData.data,
    hasNextPage: reviewData.hasNextPage,
    nextCursor: reviewData.nextCursor,
  });
};
