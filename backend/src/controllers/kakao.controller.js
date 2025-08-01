import { StatusCodes } from "http-status-codes";
import {
  exchangeCodeForTokenService,
  findOrCreateKakaoUserService,
} from "../services/kakao.service.js";

export const handleKakaoRedirect = (req, res) => {
  const redirectUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}`;
  res.redirect(redirectUrl);
};

export const handleKakaoCallback = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "카카오 로그인 콜백"
  #swagger.description = "카카오 인가코드로 access_token을 받아 사용자 정보를 조회하고, 최초 로그인 시 회원을 생성합니다. 세션에 로그인 정보 저장"
  #swagger.responses[200] = {
    description: "카카오 로그인 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: {
              type: "object",
              properties: {
                id: { type: "number", example: 1 },
                email: { type: "string", example: "kakao@kakao.com" }
              }
            }
          }
        }
      }
    }
  }
*/

  try {
    const code = req.query.code;
    const kakaoUserInfo = await exchangeCodeForTokenService(code);
    const user = await findOrCreateKakaoUserService(kakaoUserInfo);

    req.session.user = {
      id: user.id.toString(),
      email: user.email,
    };

    res.status(StatusCodes.OK).success({
      id: user.id.toString(),
      email: user.email,
    });
  } catch (err) {
    console.error("카카오 로그인 에러:", err);
    next(err);
  }
};
