import { getData } from "../repositories/suggestions.repository.js";
import { NoMenuData, NoParams } from "../errors.js";
export const getMenuData = async (data = null) => {
  const menuData = await getData(data);
  if (menuData.error === "NO_DATA") {
    throw new NoMenuData("해당 메뉴의 정보가 없습니다", data);
  } else if (menuData.error === "NO_PARAMS") {
    throw new NoParams("전달된 파라미터가 없습니다", data);
  } else {
    return menuData;
  }
};
