/**
 * 마이페이지 관련 DTO 함수들
 */

// 프로필 수정 요청 데이터 변환
export const bodyToProfileUpdate = (body, userId) => {
  return {
    userId: userId,
    email: body.email,
    // phone_num: body.phone_num || body.phoneNumber, 
    nickname: body.nickname,
    body_type: body.body_type,
    gender: body.gender,
    exercise: body.exercise || body.state,
    prefer: body.prefer,
    allergic: body.allergic || body.allergy,
    profileImageUrl: body.profileImageUrl
  };
};

// 프로필 응답 데이터 변환
export const responseFromProfile = (user) => {
  return {
    id: user.id.toString(),
    email: user.email,
    // phone_num: user.phone_num,  
    nickname: user.nickname,
    body_type: convertBodyType(user.body_type),
    gender: convertGender(user.gender),
    exercise: convertExercise(user.exercise),
    prefer: user.prefer,
    allergic: user.allergic,
    profileImageUrl: user.profileImageUrl,
    created_at: user.created_at,
    updated_at: user.updated_at
  };
};


// 맛집 정보 수정 요청 데이터 변환
export const bodyToRestaurantUpdate = (body, restaurantId, userId) => {
  return {
    restaurantId: restaurantId,
    userId: userId,
    name: body.name,
    location1: body.location1,
    location2: body.location2,
    location3: body.location3,
    address: body.address,
    detail_address: body.detail_address,
    repre_menu: body.repre_menu,
    close_day: body.close_day,
    start_time: body.start_time,
    end_time: body.end_time
  };
};

// 맛집 응답 데이터 변환
export const responseFromRestaurant = (restaurant) => {
  return {
    id: restaurant.id.toString(),
    name: restaurant.name,
    location1: restaurant.location1,
    location2: restaurant.location2,
    location3: restaurant.location3,
    address: restaurant.address,
    detail_address: restaurant.detail_address,
    repre_menu: restaurant.repre_menu,
    close_day: restaurant.close_day,
    start_time: restaurant.start_time,
    end_time: restaurant.end_time,
    rating: restaurant.rating,
    images: restaurant.rest_image?.map(img => ({
      id: img.id.toString(),
      link: img.link
    })) || []
  };
};

// 찜 요청 데이터 변환
export const bodyToZzimRequest = (body) => {
  return {
    userId: body.userId,
    restaurantId: body.restaurantId || body.restId
  };
};

// 찜 응답 데이터 변환
export const responseFromZzim = (zzim) => {
  return {
    id: zzim.id.toString(),
    userId: zzim.user_id.toString(),
    restaurantId: zzim.rest_id.toString(),
    created_at: zzim.created_at,
    restaurant: zzim.restaurant ? responseFromRestaurant(zzim.restaurant) : null
  };
};

// 찜 목록 응답 데이터 변환
export const responseFromZzimList = (zzimList, hasNextPage, nextCursor) => {
  const transformedList = zzimList.map(zzim => responseFromZzim(zzim));
  
  return {
    data: transformedList,
    hasNextPage: hasNextPage,
    nextCursor: nextCursor
  };
};

// 맛집 목록 응답 데이터 변환
export const responseFromRestaurantList = (restaurants, hasNextPage, nextCursor) => {
  const transformedList = restaurants.map(restaurant => responseFromRestaurant(restaurant));
  
  return {
    data: transformedList,
    hasNextPage: hasNextPage,
    nextCursor: nextCursor
  };
};

// Enum 변환 함수들 (기존 user.dto.js 스타일 따름)
function convertGender(gender) {
  const map = {
    male: "남성",
    female: "여성",
    "남성": "남성",
    "여성": "여성"
  };
  return map[gender] ?? gender;
}

function convertExercise(exercise) {
  const map = {
    diet: "다이어트 중",
    bulk: "중량 중", 
    maintain: "유지 중",
    "다이어트 중": "다이어트 중",
    "중량 중": "중량 중",
    "유지 중": "유지 중"
  };
  return map[exercise] ?? exercise;
}

function convertBodyType(bodyType) {
  const map = {
    cold: "감기",
    indigestion: "소화불량", 
    heat_type: "더위잘탐",
    cold_type: "추위잘탐",
    "감기": "감기",
    "소화불량": "소화불량",
    "더위잘탐": "더위잘탐",
    "추위잘탐": "추위잘탐"
  };
  return map[bodyType] ?? bodyType;
}