import { editRestData } from "../repositories/editRestaurant.repository.js";
export const editRestaurant = async (data, params) => {
  const restId = await editRestData(data, params);
};
