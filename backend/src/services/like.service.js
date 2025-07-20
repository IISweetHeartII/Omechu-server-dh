import { changeLike } from "../repositories/like.repository.js";
import {
  FailToChangeLike,
  NoInCorrectData,
  NoInCorrectParmas,
} from "../errors.js";
export const addLike = async ({ data, restId, reviewId }) => {
  const like = await changeLike({ data, restId, reviewId });
  if (like.error === "NO_PARAMS") {
    throw new NoInCorrectParmas("올바른 파라미터가 전달되지 않았습니다", {
      data,
      restId,
      reviewId,
    });
  } else if (like.error === "CANT_CHANGE") {
    throw new FailToChangeLike("해당 리뷰의 좋아요 수가 0개 이하 입니다", {
      restId,
      reviewId,
    });
  } else if (like.error === "NO_INCORRECT_DATA") {
    throw new NoInCorrectData("해당 리뷰의 정보가 없습니다", {
      restId,
      reviewId,
    });
  }
  return like;
};
