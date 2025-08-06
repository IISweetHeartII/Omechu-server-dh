import { userLogin } from "../repositories/login.repository.js";
import { NoEmailOrPasswd, InCorrectPasswd } from "../errors.js";
export const findUser = async (data) => {
  if (data.email == undefined || data.password == undefined) {
    throw new NoEmailOrPasswd(
      "이메일 이나 비밀번호를 입력하지 않았습니다.",
      data
    );
  }
  const user = await userLogin(data);
  if (user.error == "NO_USER") {
    throw new NoEmailOrPasswd("이메일이 틀렸습니다");
  } else if (user.error == "IN_CORRECT_PASSWORD") {
    throw new InCorrectPasswd("비밀번호가 틀렸습니다", data);
  } else {
    return user;
  }
};
