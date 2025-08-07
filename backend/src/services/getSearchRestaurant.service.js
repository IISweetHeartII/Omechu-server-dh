import { searchRestaurant } from "../repositories/getSearchRestaurant.repository.js";
export const getSearchRestaurant = async ({ menu, location, category }) => {
  const restData = await searchRestaurant(menu, location, category);
};
