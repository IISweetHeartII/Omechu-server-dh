
// Enum 변환 함수들
const convertBodyType = (bodyType) => {
  const bodyTypeMap = {
    1: '감기',
    2: '소화불량', 
    3: '더위잘탐',
    4: '추위잘탐'
  };
  return bodyTypeMap[bodyType] || bodyType;
};

const convertGender = (gender) => {
  const genderMap = {
    1: '남성',
    2: '여성'
  };
  return genderMap[gender] || gender;
};

const convertExercise = (exercise) => {
  const exerciseMap = {
    1: '다이어트 중',
    2: '증량 중', 
    3: '유지 중'
  };
  return exerciseMap[exercise] || exercise;
};

// 프로필 수정 요청 데이터 변환
export const bodyToProfileUpdate = (body, userId) => {
  return {
    userId: userId,
    email: body.email,
    phone_num: body.phone_num || body.phoneNumber,
    nickname: body.nickname,
    body_type: body.body_type,
    gender: body.gender,
    exercise: body.exercise || body.state,
    prefer: body.prefer,
    allergic: body.allergic || body.allergy,
    profileImageUrl: body.profileImageUrl
  };
};

// 프로필 응답 데이터 변환 - ID로 조회한 모든 정보 반환
export const responseFromProfile = (user) => {
  return {
    id: user.id.toString(),
    email: user.email,
    phone_num: user.phone_num,
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

// 맛집 응답 데이터 변환 - ID로 조회한 모든 맛집 정보 반환
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
    // 이미지 정보가 있다면 포함
    images: restaurant.rest_image?.map(img => ({
      id: img.id.toString(),
      link: img.link
    })) || []
  };
};

// 맛집 목록 응답 데이터 변환 - ID로 조회한 모든 맛집 목록 반환
export const responseFromRestaurantList = (restaurants, hasNextPage, nextCursor) => {
  return {
    data: restaurants.map(restaurant => responseFromRestaurant(restaurant)),
    hasNextPage,
    nextCursor
  };
};

// 찜 요청 데이터 변환
export const bodyToZzimRequest = (body) => {
  return {
    userId: body.userId,
    restaurantId: body.restaurantId || body.restId
  };
};

// 찜 응답 데이터 변환 - ID로 조회한 모든 찜 정보 반환
export const responseFromZzim = (zzim) => {
  return {
    id: zzim.id.toString(),
    userId: zzim.user_id.toString(),
    restaurantId: zzim.rest_id.toString(),
    created_at: zzim.created_at,
    restaurant: zzim.restaurant ? responseFromRestaurant(zzim.restaurant) : null
  };
};

// 찜 목록 응답 데이터 변환 - ID로 조회한 모든 찜 목록 반환
export const responseFromZzimList = (zzims, hasNextPage, nextCursor) => {
  return {
    data: zzims.map(zzim => responseFromZzim(zzim)),
    hasNextPage,
    nextCursor
  };
};