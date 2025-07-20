import { fetchKakaoPlaces } from "../repositories/restaurant.repository.js";

export const fetchKakaoPlacesService = async (info) => {
    console.log("Service called with info:", info);
    const documents = await fetchKakaoPlaces(info);
    console.log("검색된 장소 수:", documents.meta.total_count);
    const places = documents.documents;
    console.log("Fetched places from service:", places);
    return places;
}
