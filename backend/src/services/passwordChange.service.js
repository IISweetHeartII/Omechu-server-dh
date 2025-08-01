import { findUserById } from "../repositories/user.repository.js";
import { updateUserPasswordById } from "../repositories/passwordReset.repository.js";
import { InvalidPasswordError } from "../errors.js";

export const changeUserPasswordService = async (
  userId,
  currentPassword,
  newPassword
) => {
  const user = await findUserById(userId);

  if (user.password !== currentPassword) {
    throw new InvalidPasswordError("현재 비밀번호가 일치하지 않습니다.");
  }

  await updateUserPasswordById(userId, newPassword);
};
