import { getRestData } from "../repositories/getRestaurant.repository.js";
import { NoRestData } from "../errors.js";
export const getRestaurant = async ({ location, keyword, cursor, limit }) => {
  const restData = await getRestData(location, keyword, cursor, limit);
  if (restData.error == "NO_DATA") {
    throw new NoRestData("맛집 정보가 없습니다", { location, keyword });
  } else if (restData.error == "NO_REST_DATA") {
    throw new NoRestData("해당 위치의 맛집 정보가 없습니다", location);
  } else if (restData.error == "NO_KEYWORD_REST_DATA") {
    throw new NoRestData("해당 키워드를 가진 맛집 정보가 없습니다", keyword);
  } else if (restData.error == "NO_REST_AND_KEYAWORD_DATA") {
    throw new NoRestData("해당 위치와 키워드를 가진 맛집 정보가 없습니다", {
      location,
      keyword,
    });
  } else {
    return restData;
  }
};
