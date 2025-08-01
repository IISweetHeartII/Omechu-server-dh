/**
 * 마이페이지 관련 DTO 함수들
 */

// 프로필 수정 요청 데이터 변환
export const bodyToProfileUpdate = (body, userId) => {
  return {
    userId: userId,
    email: body.email,
    nickname: body.nickname,
    body_type: convertBodyTypeToEnum(body.body_type),
    gender: convertGenderToEnum(body.gender),
    exercise: convertExerciseToEnum(body.exercise),
    prefer: body.prefer,
    allergy: body.allergy,
    profileImageUrl: body.profileImageUrl,
  };
};

// 프로필 응답 데이터 변환
export const responseFromProfile = (user) => {
  const preferData = user.prefer.map((data) => convertPrefer(data.prefer));
  const allergyData = user.allergy.map((data) => convertAllergy(data.allergy));
  return {
    id: user.id.toString(),
    email: user.email,
    nickname: user.nickname,
    body_type: convertBodyType(user.body_type),
    gender: convertGender(user.gender),
    exercise: convertExercise(user.exercise),
    prefer: preferData || [],
    allergy: allergyData || [],
    profileImageUrl: user.profileImageUrl,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
};

// 맛집 정보 수정 요청 데이터 변환
export const bodyToRestaurantUpdate = (body, restaurantId, userId) => {
  return {
    restaurantId: restaurantId,
    userId: userId,
    name: body.name,
    repre_menu: body.repre_menu,
    address: body.address,
  };
};

// 맛집 응답 데이터 변환
export const responseFromRestaurant = (restaurant) => {
  return {
    id: restaurant.id.toString(),
    name: restaurant.name,
    repre_menu: restaurant.repre_menu,
    address: restaurant.address,
    rating: restaurant.rating,
  };
};

// 찜 요청 데이터 변환
export const bodyToZzimRequest = (body) => {
  return {
    userId: body.userId,
    restaurantId: body.restaurantId || body.restId,
  };
};

// 찜 응답 데이터 변환
export const responseFromZzim = (zzim) => {
  return {
    id: zzim.id.toString(),
    userId: zzim.user_id.toString(),
    restaurantId: zzim.rest_id.toString(),
    created_at: zzim.created_at,
    restaurant: zzim.restaurant
      ? {
          id: zzim.restaurant.id.toString(),
          name: zzim.restaurant.name,
          address: zzim.restaurant.address,
          rating: zzim.restaurant.rating,
          // 🆕 추가된 필드들
          reviewCount: zzim.restaurant.reviewCount || 0,
          representativeMenus: zzim.restaurant.representativeMenus || [],
          tags: zzim.restaurant.tags || [],
          rest_image: zzim.restaurant.rest_image, // 이미지도 추가
        }
      : null,
  };
};

// 찜 목록 응답 데이터 변환
export const responseFromZzimList = (zzimList, hasNextPage, nextCursor) => {
  const transformedList = zzimList.map((zzim) => responseFromZzim(zzim));

  return {
    data: transformedList,
    hasNextPage: hasNextPage,
    nextCursor: nextCursor,
  };
};

// ============= Enum 변환 함수들 (user.dto.js와 통일) =============

// 성별: "여성", "남성" ↔ "female", "male"
function convertGenderToEnum(gender) {
  const map = {
    남성: "male",
    여성: "female",
  };
  return map[gender] ?? null;
}

function convertGender(gender) {
  const map = {
    male: "남성",
    female: "여성",
  };
  return map[gender] ?? gender;
}

// 운동 상태: "다이어트 중", "증량 중", "유지 중" ↔ "dieting", "bulking", "maintaining"
function convertExerciseToEnum(exercise) {
  const map = {
    "다이어트 중": "dieting",
    "증량 중": "bulking",
    "유지 중": "maintaining",
  };
  return map[exercise] ?? null;
}

function convertExercise(exercise) {
  const map = {
    dieting: "다이어트 중",
    bulking: "증량 중",
    maintaining: "유지 중",
  };
  return map[exercise] ?? exercise;
}

// 체질: "감기", "소화불량", "더위잘탐", "추위잘탐" ↔ "cold", "indigestion", "heat_sensitive", "cold_sensitive"
// user.dto.js와 일관성을 위해 heat_sensitive, cold_sensitive 사용
function convertBodyTypeToEnum(bodyType) {
  const map = {
    감기: "cold",
    소화불량: "indigestion",
    더위잘탐: "heat_sensitive",
    추위잘탐: "cold_sensitive",
  };
  return map[bodyType] ?? null;
}

function convertBodyType(bodyType) {
  const map = {
    cold: "감기",
    indigestion: "소화불량",
    heat_sensitive: "더위잘탐",
    cold_sensitive: "추위잘탐",
  };
  return map[bodyType] ?? bodyType;
}

// 선호 음식: "한식", "양식", "중식", "일식", "다른나라" ↔ "korean", "western", "chinese", "japanese", "other"
function convertPreferToEnum(prefer) {
  const map = {
    한식: "korean",
    양식: "western",
    중식: "chinese",
    일식: "japanese",
    다른나라: "other",
  };
  return map[prefer] ?? null;
}

function convertPrefer(prefer) {
  const map = {
    korean: "한식",
    western: "양식",
    chinese: "중식",
    japanese: "일식",
    other: "다른나라",
  };
  return map[prefer] ?? prefer;
}

// 알레르기: "달걀(난류) 알레르기", "우유 알레르기", "갑각류 알레르기", "해산물 알레르기", "견과류 알레르기" ↔ "egg", "milk", "shellfish", "seafood", "nuts"
function convertAllergyToEnum(allergy) {
  const map = {
    "달걀(난류) 알레르기": "egg",
    "우유 알레르기": "milk",
    "갑각류 알레르기": "shellfish",
    "해산물 알레르기": "seafood",
    "견과류 알레르기": "nuts",
  };
  return map[allergy] ?? null;
}

function convertAllergy(allergy) {
  const map = {
    egg: "달걀(난류) 알레르기",
    milk: "우유 알레르기",
    shellfish: "갑각류 알레르기",
    seafood: "해산물 알레르기",
    nuts: "견과류 알레르기",
  };
  return map[allergy] ?? allergy;
}
