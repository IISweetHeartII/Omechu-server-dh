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
