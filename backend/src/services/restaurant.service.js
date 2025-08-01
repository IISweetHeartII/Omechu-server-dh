import {
  fetchKakaoPlaces,
  fetchGooglePlaces,
  addRestaurantToDatabase,
  checkRestaurantExists,
  googlePlaceIdtoId
} from "../repositories/restaurant.repository.js";
import { getPlaceDetail } from "../repositories/restaurant.repository.js";
export const fetchKakaoPlacesService = async (info) => {
  console.log("Service called with info:", info);
  const documents = await fetchKakaoPlaces(info);
  console.log("검색된 장소 수:", documents.meta.total_count);
  const places = documents.documents;
  console.log("Fetched places from service:", places);
  return places;
};



export const fetchGooglePlacesService = async (info) => {
  console.log("Service called with info:", info);
  const response = await fetchGooglePlaces({ info });
  console.log("Fetched places from service:", response.places);
  if (!response || !response.places || response.places.length === 0) {
    return [];
  }

  await Promise.all(
    response.places.map(async (place) => {
      const exists = await checkRestaurantExists(place.id);
      if (!exists) {
        const result = await addRestaurantToDatabase(place, info.keyword);
        place.id2 = result.id.toString();
      } else {
        console.log(
          `Restaurant with ID ${place.id} already exists in the database.`
        );
        const id2 = await googlePlaceIdtoId(place.id);
        place.id2 = id2;
      }
    })
  );
  return response.places;
};

export const getPlaceDetailService = async (restId) => {
  console.log("Get Google Place detail for ID:", restId);
  const placeDetail = await getPlaceDetail(restId);
  console.log("placeDetail", placeDetail);
  if (!placeDetail) {
    console.error("No place detail found for ID:", restId);
    return null;
  }
  return placeDetail;
};
