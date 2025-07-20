import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/auth.dto.js";
import { userSignUp } from "../services/auth.service.js";

export const handleUserSignUp = async (req, res, next) => {
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body);

  const user = await userSignUp(bodyToUser(req.body));

  req.session.user = {
    id: Number(user.id), 
    email: user.email,
  };

  console.log(req.session);

  res.status(StatusCodes.OK).success({
    ...user,
    id: Number(user.id),
  });
};
