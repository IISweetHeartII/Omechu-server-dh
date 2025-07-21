import {
  NoReviewData,
  NoUserData,
  NoRestData,
  NoImageUrl,
  FailToAddReview,
} from "../errors.js";
import { addReviewData } from "../repositories/addReview.repository.js";
// improt {addReviewData} from ""
export const addReview = async (data) => {
  if (!data) {
    throw new NoReviewData("리뷰 정보가 없습니다", data);
  }
  const review = await addReviewData(data);
  if (review.error === "NO_USER") {
    throw new NoUserData("해당 유저 정보가 없습니다", data);
  }
  if (review.error === "NO_REST") {
    throw new NoRestData("해당 식당 정보가 없습니다", data);
  }
  if (review.error === "NO_IMAGE_URL") {
    throw new NoImageUrl("이미지 URL이 없습니다", data);
  }
  if (review.error === "ADD_REVIEW_OR_IMAGE_ERROR") {
    throw new FailToAddReview("리뷰 작성에 실패했습니다", data);
  }
  return review;
};
