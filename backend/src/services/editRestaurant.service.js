import { editRestData } from "../repositories/editRestaurant.repository.js";
import {
  WrongAddress,
  NotYourRest,
  FailToUpdateRestData,
  NoRestData,
} from "../errors.js";
export const editRestaurant = async ({ data, params, userId }) => {
  const restId = await editRestData(data, params, userId);
  if (restId.error == "NO_ADDRESS") {
    throw new WrongAddress("없는 주소입니다", data.address);
  } else if (restId.error == "NOT_YOUR_REST") {
    throw new NotYourRest("당신이 작성한 가게가 아닙니다", { userId });
  } else if (restId.error == "CANT_UPDATE") {
    throw new FailToUpdateRestData(
      "가게 정보를 업데이트 하는데 실패했습니다",
      data
    );
  } else if (restId.error == "NO_DATA" || restId.error == "NO_REST_DATA") {
    throw new NoRestData(
      "해당 가게의 정보가 없거나 본인이 작성한 가게가 아닙니다",
      {
        rest_id: params,
      }
    );
  } else {
    return restId;
  }
};
