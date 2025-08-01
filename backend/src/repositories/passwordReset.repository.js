import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { PrismaClient } from "../generated/prisma/index.js";
import { UserNotFoundError } from "../errors.js";

const prisma = new PrismaClient();

export const upsertPasswordResetToken = async (email, token, expiresAt) => {
  return prisma.password_reset_token.upsert({
    where: { email },
    update: { token, expires_at: expiresAt },
    create: { email, token, expires_at: expiresAt },
  });
};

export const findPasswordResetToken = async (token) => {
  return prisma.password_reset_token.findUnique({ where: { token } });
};

export const deletePasswordResetToken = async (token) => {
  return prisma.password_reset_token.delete({ where: { token } });
};

export const updateUserPasswordByEmail = async (email, newPassword) => {
  try {
    return await prisma.user.update({
      where: { email },
      data: { password: newPassword },
    });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      throw new UserNotFoundError("해당 사용자를 찾을 수 없습니다.");
    }
    throw err;
  }
};

export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const updateUserPasswordById = async (id, newPassword) => {
  return prisma.user.update({
    where: { id: Number(id) },
    data: { password: newPassword },
  });
};
