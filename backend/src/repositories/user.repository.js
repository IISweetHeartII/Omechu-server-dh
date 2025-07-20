import { PrismaClient } from '../generated/prisma/index.js'
const prisma = new PrismaClient();


export const findUserById = async (userId) => {
  return await prisma.user.findUnique({
    where: { id: Number(userId) },
    include: {
      prefer: true,
      allergy: true,
    },
  });
};

export const updateUserInfo = async (userId, data) => {
  return await prisma.user.update({
    where: { id: userId },
    data,
  });
};

export const createUserPreferences = async (userId, preferArray) => {
  if (!preferArray || preferArray.length === 0) return;
  const data = preferArray.map((p) => ({ userId, prefer: p }));
  await prisma.prefer.createMany({ data });
};

export const createUserAllergies = async (userId, allergyArray) => {
  if (!allergyArray || allergyArray.length === 0) return;
  const data = allergyArray.map((a) => ({ userId, allergy: a }));
  await prisma.allergy.createMany({ data });
};


export const getUserInfoForMenu = async (userId) => {
  //exceptions, gender,exercise,preference,body_type, allergy
  if (!userId) {
    throw new Error("User ID is required");
  }
  const userInfo = await prisma.user.findUnique({
    where: { id: Number(userId) },
    select: {
      gender: true,
      exercise: true,
      body_type: true,
    },
  });
  if (!userInfo) {
    throw new Error("User not found");
  }

  return {
    gender: userInfo.gender,
    exercise: userInfo.exercise,
    body_type: userInfo.body_type,
  };
}

export const getUserPreferences = async (userId) => {
  if (!userId) {
    throw new Error("User ID is required");
  }
  const preferences = await prisma.prefer.findMany({
    where: { userId: Number(userId) },
    select: { prefer: true },
  });
  return preferences.map((p) => p.prefer);
}

export const getUserAllergies = async (userId) => {
  if (!userId) {
    throw new Error("User ID is required");
  }
  const allergies = await prisma.allergy.findMany({
    where: { userId: Number(userId) },
    select: { allergy: true },
  });
  return allergies.map((a) => a.allergy);
}

export const getUserExceptedMenus = async (userId) => {

  //prisma로 변경
  try {
    const exceptedMenus = await prisma.recommend_except.findMany({
      where: { user_id: userId },
      select: { menu_id: true },
    });

    //메뉴 이름 가져오기
    const menuIds = exceptedMenus.map((menu) => menu.menu_id);
    const menuNames = await prisma.menu.findMany({
      where: { id: { in: menuIds } },
      select: { name: true },
    });
    return menuNames;
  } catch (error) {
    console.error("Error getting user excepted menus:", error);
    throw error;
  }

}

export const getUserIdBySession = async (session) => {
  console.log("Session ID:", session);
  //sql 으로 변경
  const result = await prisma.sessions.findUnique({
    where: { session_id: session },
    select: { data: true },
  });
  if (!result || !result.data) {
    throw new Error("Session not found");
  }

  // JSON 문자열을 파싱
  const sessionData = JSON.parse(result.data);

  if (!sessionData || !sessionData.user || !sessionData.user.id) {
    throw new Error("User ID not found in session data");
  }

  return sessionData.user.id;
}