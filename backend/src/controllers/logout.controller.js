import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { createClient } from "redis";
import {
  NoBearerToken,
  BearerTokenError,
  BearerTokenServerError,
} from "../errors.js";

// Redis 연결
const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});
await redisClient.connect();

export const handleUserLogoutJWT = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "로그아웃"
  #swagger.description = "Refresh Token을 무효화하여 로그아웃합니다."

  #swagger.security = [{ bearerAuth: [] }]

  #swagger.responses[200] = {
    description: "로그아웃 성공",
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
                message: { type: "string", example: "로그아웃되었습니다." }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[401] = {
    description: "토큰 없음 또는 잘못된 토큰",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "T002" },
                reason: { type: "string", example: "인증 토큰이 없습니다." },
                data: { type: "object", example: null }
              }
            },
            success: { type: "string", example: null }
          }
        }
      }
    }
  }
  */

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new NoBearerToken("인증 토큰이 없습니다.");
    }

    const refreshToken = authHeader.split(" ")[1];
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const userId = decoded.payload;

    // Redis에서 Refresh Token 삭제
    await redisClient.del(`refresh:${userId}`);

    return res.status(StatusCodes.OK).success({
      message: "로그아웃되었습니다.",
    });
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return next(new BearerTokenError("유효하지 않은 토큰입니다."));
    } else {
      console.error("로그아웃 에러:", err);
      return next(new BearerTokenServerError("로그아웃 처리 중 서버 오류"));
    }
  }
};
