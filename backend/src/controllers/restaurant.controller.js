import { StatusCodes } from "http-status-codes";
import { fetchKakaoPlacesService } from "../services/restaurant.service.js";

export const handleFetchKakaoPlaces = async (req, res) => {
    const info = {
        y: req.body.y,
        x: req.body.x,
        radius: req.body.radius,
        keyword: req.body.keyword
    };

    try {
        const places = await fetchKakaoPlacesService(info);
        if (places && places.length > 0) {
            res.status(200).json(places);
        } else {
            res.status(404).json({ message: "No places found" });
        }
    } catch (error) {
        console.error("Error fetching places:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}