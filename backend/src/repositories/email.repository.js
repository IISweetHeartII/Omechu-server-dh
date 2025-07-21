import { PrismaClient } from '../generated/prisma/index.js'
const prisma = new PrismaClient();

export const createEmailVerification = async (email, code) => {
  return await prisma.email_verification.create({
    data: { email, code },
  });
};

export const findEmailVerification = async (email) => {
  return await prisma.email_verification.findFirst({
    where: { email },
  });
};

export const deleteEmailVerification = async (email) => {
  return await prisma.email_verification.delete({
    where: { email },
  });
};
