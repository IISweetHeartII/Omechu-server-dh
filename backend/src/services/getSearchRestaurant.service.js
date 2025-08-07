import { searchRestaurant } from "../repositories/getSearchRestaurant.repository.js";
import { NoRestData } from "../errors.js";
export const getSearchRestaurant = async ({
  menu,
  location,
  tag,
  userId,
  cursor,
  limit,
}) => {
  const restData = await searchRestaurant(
    menu,
    location,
    tag,
    userId,
    cursor,
    limit
  );
  if (restData.error == "NO_DATA") {
    throw new NoRestData("해당 맛집 정보가 없습니다", {
      menu: menu,
      location: location,
      tag: tag,
    });
  } else {
    return restData;
  }
};
