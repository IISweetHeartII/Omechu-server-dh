import { addRestData } from "../repositories/addRestaurant.repository.js";
import {
  NoParams,
  FailToAddRest,
  DuplicatedRest,
  WrongAddress,
  FailToAddRepreMenu,
} from "../errors.js";
export const addRest = async (data) => {
  const rest = await addRestData(data);
  if (rest.error == "NO_PARAMS") {
    throw new NoParams("필수로 필요한 파라미터가 전달되지 않았습니다", data);
  } else if (rest.error == "CANT_ADD_REST") {
    throw new FailToAddRest("맛집 추가하는데 실패했습니다", data);
  } else if (rest.error == "DUPLICATED_REST") {
    throw new DuplicatedRest("이미 동일한 맛집이 등록되어 있습니다", data);
  } else if (rest.error == "WRONG_ADDRESS") {
    throw new WrongAddress("잘못된 주소입니다", data.address);
  } else if (rest.error == "CANT_ADD_REPRE_MENU") {
    throw new FailToAddRepreMenu("대표 메뉴를 추가하는데 실패했습니다", data);
  } else {
    return rest;
  }
};
