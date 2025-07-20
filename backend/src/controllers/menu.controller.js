import { StatusCodes } from "http-status-codes";
import {bodyToChoice} from "../dtos/choice.dto.js";
import {recommendMenuService } from "../services/menu.service.js";
export const handleRecommendMenu = async (req, res) => {
    const choice = bodyToChoice(req.body);
    if(req.body.exceptions) {
        choice.exceptions = req.body.exceptions; // 예외사항이 있다면 추가
    }
    const newRecommendation = await recommendMenuService(choice);
    if (newRecommendation) {
        res.status(StatusCodes.OK).json(newRecommendation);
    } else {
        res.status(StatusCodes.NOT_FOUND).json({ message: "No recommendation found" });
    }
}