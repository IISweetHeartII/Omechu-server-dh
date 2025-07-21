import dotenv from "dotenv";
import { prisma } from "../db.config.js";
dotenv.config();
import { OpenAI } from 'openai';




// {
// "y" : "37.4895246",
// "x" : "126.986331",
// "radius" : "3000",
// "keyword" : "아메리카노"
// }
export const fetchKakaoPlaces = async (info) => {
  console.log("Fetching places with info:", info);
  const url = new URL("https://dapi.kakao.com/v2/local/search/keyword.json");

  // GET 파라미터 설정
  url.searchParams.append("y", info.y);
  url.searchParams.append("x", info.x);
  url.searchParams.append("radius", info.radius);
  url.searchParams.append("query", info.keyword);
  console.log("Request URL:", url.toString());
  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
    },
  });
  console.log("Response status:", response.status);
  if (!response.ok) {
    console.error("API 요청 실패:", response.statusText);
    return;
  }
  const data = await response.json();
  return data;
};




export const fetchGooglePlaces = async ({ info }) => {
  const url = "https://places.googleapis.com/v1/places:searchText";

  const body = {
    textQuery: info.keyword,
    openNow: true,
    pageSize: info.pageSize,
    languageCode: "ko",
    locationBias: {
      circle: {
        center: { latitude: info.latitude, longitude: info.longitude },
        radius: info.radius,
      },
    },
  };

  const KEY = process.env.GOOGLE_MAPS_API_KEY;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": KEY,
      "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.id"
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.error(`API 요청 실패: ${response.status} ${response.statusText}`);
    const error = await response.text();
    console.error(error);
    return null;
  }

  const data = await response.json();
  console.log(data);
  return data;
}


export const addRestaurantToDatabase = async (restaurantData, keyword) => {
  try {
    const address = restaurantData.formattedAddress || "";
    const name = restaurantData.displayName.text || "";
    const repreMenu = keyword || "";
    const googlePlaceId = restaurantData.id || "";
    //address 맨 앞에 "대한민국"이 붙어 있다면 제거
    const cleanedAddress = address.startsWith("대한민국") ? address.slice(5).trim() : address;
    const location = await addressToLocation(cleanedAddress);
    console.log("Converted location:", location);
    const result = await prisma.restaurant.create({
      data: {
        repre_menu: repreMenu,
        google_place_id: googlePlaceId,
        location: location,
      },
    });

    console.log("Restaurant added to database:", name);
    return result;
  } catch (error) {
    console.error("Error adding restaurant to database:", error);
    throw error;
  }
}

// 레스토랑 id가 존재하는 지 확인하는 함수
export const checkRestaurantExists = async (restaurantId) => {
  if (!restaurantId) {
    console.error("Restaurant id is undefined or null");
    return true;
  }
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { google_place_id: restaurantId },
    });
    return !!restaurant; // 존재하면 true, 아니면 false
  } catch (error) {
    console.error("Error checking restaurant existence:", error);
    throw error;
  }
}

export const addressToLocation = async (address) => {
  try {
    console.log("Converting address to location:", address);
    const key = process.env.OPENAI_API_KEY;
    const openai = new OpenAI({
      apiKey: key
    });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: 'system',
          content: `
                        해당 주소를 보고 "무슨시 무슨구 무슨동" 형식의 위치로 변환해줘.
                        주소: ${address}
                        예시: "서울특별시 강남구 역삼동"
                        만약 주소가 "대한민국"으로 시작한다면, "대한민국"을 제거하고 변환해줘.
          `,
        }
      ],
    });
    const rawText = completion.choices[0].message.content.trim();
    console.log("Raw response from GPT:", rawText);
    return rawText;

  } catch (error) {
    console.error("Error converting address to location:", error);
    throw error;
  }
}



export const fetchPlaceDetail = async (placeId) => {
  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=ko`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
        "X-Goog-FieldMask": "currentOpeningHours.weekdayDescriptions,displayName,formattedAddress",
      },
    });

    if (!response.ok) {
      console.error("Google Places API 요청 실패:", response.statusText);
      return null;
    }
    
    const data = await response.json();
    console.log("Fetched place detail:", data);
    return data;

  } catch (error) {
    console.error("Google Places 요청 중 에러 발생:", error);
    return null;
  }
};