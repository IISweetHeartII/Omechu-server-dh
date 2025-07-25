import { getRestaurant } from "../services/getRestaurant.service.js";
import { bodyToGetRest } from "../dtos/getRestaurant.dto.js";
import { StatusCodes } from "http-status-codes";
export const handleGetRestaurant = async (req, res) => {
  const restData = await getRestaurant(
    bodyToGetRest({
      data: req.body,
      cursor: req.query.cursor,
      limit: req.query.limit,
    })
  );
  res.status(StatusCodes.OK).success(restData);
};
