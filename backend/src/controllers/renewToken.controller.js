import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { createClient } from "redis";
import {
  NoBearerToken,
  ExpireToken,
  BearerTokenError,
  BearerTokenServerError,
} from "../errors.js";
import { generateAccessToken } from "../utils/token.js";

// Redis 연결
const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});
await redisClient.connect();

export const handleRenewToken = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "Access Token 재발급"
  #swagger.description = "Refresh Token을 이용하여 Access Token을 재발급하는 API입니다."
  #swagger.security = [{
    "bearerAuth": []
  }]
  #swagger.responses[200] = {
    description: "토큰 재발급 성공",
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
                accessToken: { type: "string" },
              }
            }
          }
        }
      }
    }
  }
    #swagger.responses[401] = {
  description: "인증 실패 (토큰 없음 / 유효하지 않음 / 만료됨)",
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
              reason: { type: "string", example: "Refresh Token이 유효하지 않습니다." },
              data: { type: "object", example: null }
            }
          },
          success: { type: "string", example: null }
        }
      }
    }
  }
}

#swagger.responses[500] = {
  description: "서버 내부 오류",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string", example: "SERVER_ERROR" },
              reason: { type: "string", example: "서버 오류" },
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
      throw new NoBearerToken("Refresh Token이 없습니다.");
    }

    const refreshToken = authHeader.split(" ")[1];

    // Refresh Token 검증
    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    } catch (err) {
      console.error("JWT 검증 실패:", err.message);
      throw err;
    }

    // payload가 객체일 경우 대비 (ex: { payload: userId })
    const userId = typeof decoded === "object" && decoded.payload ? decoded.payload : decoded;

    // Redis에서 Refresh Token 가져오기
    const storedToken = await redisClient.get(`refresh:${userId}`);

    if (!storedToken) {
      throw new BearerTokenError("저장된 Refresh Token이 없습니다.");
    }

    if (storedToken !== refreshToken) {
      throw new BearerTokenError("유효하지 않은 Refresh Token입니다.");
    }

    // Access Token 새로 발급
    const newAccessToken = generateAccessToken({ payload: userId.toString() });

    return res.status(StatusCodes.OK).success({
      accessToken: newAccessToken,
    });

  } catch (err) {
    console.error("Token 재발급 에러:", err);
    if (err.name === "TokenExpiredError") {
      return next(new ExpireToken("Refresh Token이 만료되었습니다. 다시 로그인해주세요."));
    } else if (err.name === "JsonWebTokenError") {
      return next(new BearerTokenError("Refresh Token이 유효하지 않습니다."));
    } else {
      return next(new BearerTokenServerError("토큰 재발급 중 서버 오류"));
    }
  }
};