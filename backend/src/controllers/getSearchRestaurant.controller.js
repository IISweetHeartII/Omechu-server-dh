import { BodyToSearchRestaurant } from "../dtos/getSearchRestaurant.dto.js";
import { getSearchRestaurant } from "../services/getSearchRestaurant.service.js";
export const handleSearchRestaurant = async (req, res) => {
  const restData = await getSearchRestaurant(BodyToSearchRestaurant(req.query));
};
