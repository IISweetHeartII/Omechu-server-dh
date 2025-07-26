import { getCoordinatesData } from "../repositories/getCoordinates.repository.js";
import { WrongAddress, NoParams } from "../errors.js";
export const getCoordinates = async (data) => {
  const coordinatesData = await getCoordinatesData(data);

  if (coordinatesData.error == "NO_ADDRESS") {
    throw new WrongAddress("해당 주소는 없는 주소입니다", {
      address: data.address,
    });
  } else if (coordinatesData.error == "NO_PARMAS") {
    throw new NoParams("올바른 정보가 전달되지 않았습니다", data);
  }
  return { lat: coordinatesData.lat, lng: coordinatesData.lng };
};
