import {
  addUser,
  getUser,
} from "../repositories/auth.repository.js";
import { responseFromUser } from "../dtos/auth.dto.js";

export const userSignUp = async (data) => {
  const joinUserId = await addUser({
    email: data.email,
    password: data.password,
    phoneNumber: data.phoneNumber,
  });

  if (joinUserId === null) {
    throw new Error("이미 존재하는 이메일입니다.");
  }

  const user = await getUser(joinUserId);

  return responseFromUser(user);
};