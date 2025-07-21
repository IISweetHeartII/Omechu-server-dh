import { PrismaClient } from '../generated/prisma/index.js'
const prisma = new PrismaClient();

export const addUser = async (data) => {
  try {
    const existingUser = await prisma.user.findFirst({
      where: { email: data.email },
    });

    if (existingUser) {
      return null;
    }

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        phone_num: data.phoneNumber,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return user.id;
  } catch (err) {
    throw new Error(`오류가 발생했어요. (${err.message})`);
  }
};

export const getUser = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  } catch (err) {
    throw new Error(`오류가 발생했어요. (${err.message})`);
  }
};
