import { PrismaClient } from '../generated/prisma/index.js'
const prisma = new PrismaClient();

export const createEmailVerification = async (email, code) => {
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  return await prisma.email_verification.upsert({
    where: { email },
    update: { code, expires_at: expiresAt },
    create: { email, code, expires_at: expiresAt },
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
