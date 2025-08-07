import { StatusCodes } from "http-status-codes";
import { getMenuData } from "../services/suggestions.service.js";
export const handleSuggestion = async (req, res) => {
  const menuData = await getMenuData(req.query.menu);
  res.status(StatusCodes.OK).success(menuData);
};
