import { editRestaurant } from "../services/editRestaurant.service.js";
export const handleEditRestaurant = async (req, res) => {
  const restId = await editRestaurant(req.body, req.params.id);
};
