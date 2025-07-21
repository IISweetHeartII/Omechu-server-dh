export const bodyToUserInfo = (body, userId) => {
  return {
    id: userId,
    password: body.password,
    nickname: body.nickname,
    is_verified: body.isVerified,
    profileImageUrl: body.profileImageUrl,
    body_type: convertBodyTypeToEnum(body.body_type),  // String → Int
    exercise: convertExerciseToEnum(body.state),       // String → Int
    gender: convertGenderToEnum(body.gender),          // String → Int
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

function convertGenderToEnum(gender) {
  const map = {
    "남자": 1,
    "여자": 2,
  };
  return map[gender] ?? null;
}

function convertExerciseToEnum(state) {
  const map = {
    "다이어트 중": 1,
    "중량 중": 2,
    "유지 중": 3,
  };
  return map[state] ?? null;
}

function convertBodyTypeToEnum(type) {
  const map = {
    "감기": 1,
    "소화불량": 2,
    "더위잘탐": 3,
    "추위잘탐": 4,
  };
  return map[type] ?? null;
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

function convertGender(gender) {
  const map = {
    1: "남자",
    2: "여자",
  };
  return map[gender] ?? gender;
}

function convertExercise(ex) {
  const map = {
    1: "다이어트 중",
    2: "중량 중",
    3: "유지 중",
  };
  return map[ex] ?? ex;
}

function convertBodyType(type) {
  const map = {
    1: "감기",
    2: "소화불량",
    3: "더위잘탐",
    4: "추위잘탐",
  };
  return map[type] ?? type;
}
