import { getRestData } from "../repositories/getRestaurant.repository.js";
export const getRestaurant = async ({ location, keyword, cursor, limit }) => {
  const restData = await getRestData(location, keyword, cursor, limit);
  return restData;
};
