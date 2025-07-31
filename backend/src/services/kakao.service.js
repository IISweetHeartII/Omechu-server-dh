import axios from "axios";
import { findUserByEmail, createUser } from "../repositories/user.repository.js";

export const exchangeCodeForTokenService = async (code) => {
  const tokenRes = await axios.post("https://kauth.kakao.com/oauth/token", null, {
    params: {
      grant_type: "authorization_code",
      client_id: process.env.KAKAO_REST_API_KEY,
      redirect_uri: process.env.KAKAO_REDIRECT_URI,
      code,
      client_secret: process.env.KAKAO_CLIENT_SECRET,
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const accessToken = tokenRes.data.access_token;

  const userRes = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const kakaoAccount = userRes.data.kakao_account;
  return {
    email: kakaoAccount.email,
    id: userRes.data.id,
  };
};

export const findOrCreateKakaoUserService = async ({ email, id }) => {
  let user = await findUserByEmail(email);
  if (!user) {
    user = await createUser({ email, kakao_id: id });
  }
  return user;
};
