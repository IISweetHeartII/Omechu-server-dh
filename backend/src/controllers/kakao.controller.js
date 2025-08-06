import { StatusCodes } from "http-status-codes";
import {
  exchangeCodeForTokenService,
  findOrCreateKakaoUserService,
} from "../services/kakao.service.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";
import { createClient } from "redis";

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});
await redisClient.connect();

export const handleKakaoRedirect = (req, res) => {
  const redirectUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_LOGIN_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}`;
  console.log("최종 Redirect URL:", redirectUrl);
  res.redirect(redirectUrl);
};

export const handleKakaoCallback = async (req, res, next) => {
  try {
    const code = req.query.code;

    // 카카오에서 유저 정보 가져오기
    const kakaoUserInfo = await exchangeCodeForTokenService(code);

    // DB에서 사용자 찾거나 신규 생성
    const user = await findOrCreateKakaoUserService(kakaoUserInfo);

    // JWT 발급
    const accessToken = generateAccessToken({ payload: user.id.toString() });
    const refreshToken = generateRefreshToken({ payload: user.id.toString() });

    // Redis에 RefreshToken 저장
    await redisClient.set(`refresh:${user.id}`, refreshToken, {
      EX: 60 * 60 * 24 * 7, // 7일 유효
    });

    // 클라이언트에 리다이렉트하면서 토큰 전달
    res.redirect(`https://omechu.log8.kr/auth/callback?accessToken=${accessToken}&refreshToken=${refreshToken}`);

  } catch (err) {
    console.error("카카오 로그인 에러:", err);
    next(err);
  }
};