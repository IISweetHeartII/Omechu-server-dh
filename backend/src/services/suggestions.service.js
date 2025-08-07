import { getData } from "../repositories/suggestions.repository.js";
export const getMenuData = async (data) => {
  const menuData = await getData(data);
  return menuData;
};
