export const bodyToUserInfo = (body, userId) => {
  return {
    id: userId,
    password: body.password,
    nickname: body.nickname,
    is_verified: body.isVerified,
    profileImageUrl: body.profileImageUrl,
    body_type: body.body_type,
    exercise: body.state, 
    gender: body.gender,  
    phone_num: body.phoneNumber,
  };
};

export const responseFromUser = (user) => {
  const prefer = user.prefer || [];
  const allergy = user.allergy || [];

  const preferCategories = prefer.map((p) => convertPrefer(p.prefer));
  const allergyTypes = allergy.map((a) => convertAllergy(a.allergy));

  return {
    email: user.email,
    nickname: user.nickname,
    profileImageUrl: user.profileImageUrl,
    gender: convertGender(user.gender),
    body_type: convertBodyType(user.body_type),
    state: convertExercise(user.exercise),
    prefer: preferCategories,
    allergy: allergyTypes,
  };
};

function convertGender(gender) {
  const map = {
    male: "남성",
    female: "여성",
  };
  return map[gender] ?? gender;
}

function convertExercise(ex) {
  const map = {
    diet: "다이어트 중",
    bulk: "중량 중",
    maintain: "유지 중",
  };
  return map[ex] ?? ex;
}

function convertBodyType(type) {
  const map = {
    cold: "감기",
    indigestion: "소화불량",
    heat_type: "더위잘탐",
    cold_type: "추위잘탐",
  };
  return map[type] ?? type;
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
