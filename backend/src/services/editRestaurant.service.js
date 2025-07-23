import { editRestData } from "../repositories/editRestaurant.repository.js";
import { DuplicatedRest } from "../errors.js";
export const editRestaurant = async (data, params) => {
  const restId = await editRestData(data, params);
  if (restId.error == "DUPLICATED_REST") {
    throw new DuplicatedRest("수정하려는 가게가 이미 존재합니다", data);
  }
};
