import axios from "axios";

export const getCoordinatesData = async (addressData = {}) => {
  console.log(addressData);
  if (Object.keys(addressData).length == 0) {
    return { error: "NO_PARMAS" };
  }
  const { data } = await axios.get(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
      addressData.address
    )}`,
    { headers: { Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}` } }
  );
  if (data.documents.length == 0) {
    return { error: "NO_ADDRESS" };
  }
  return {
    lat: parseFloat(data.documents[0].y),
    lng: parseFloat(data.documents[0].x),
  };
};
