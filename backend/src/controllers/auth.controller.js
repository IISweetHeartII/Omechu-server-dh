import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/auth.dto.js";
import { userSignUp } from "../services/auth.service.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js"; 

export const handleUserSignUp = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "회원가입"
  #swagger.description = "회원가입 API입니다. 회원가입 성공 시 세션에 사용자 정보(id, email)가 저장됩니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: { type: 'string', example: 'user@example.com' },
            password: { type: 'string', example: 'user1234!' }
          }
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "회원가입 성공",
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
                email: { type: "string", example: "user@example.com" },
                accessToken: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
                refreshToken: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 요청 (필수 값 누락 등)",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "INVALID_INPUT" },
                reason: { type: "string", example: "필수 입력값이 누락되었습니다" },
                data: {
                  type: "object",
                  properties: {
                    email: { type: "string", example: "user@example.com" }
                  }
                }
              }
            },
            success: { type: "string", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[500] = {
    description: "서버 오류",
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
                reason: { type: "string", example: "서버 내부 오류" },
                data: {
                  type: "object",
                  properties: {
                    email: { type: "string", example: "user@example.com" },
                  }
                }
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
    console.log("회원가입 요청:", req.body);

    const user = await userSignUp(bodyToUser(req.body));

    // JWT 발급
    const accessToken = generateAccessToken({ id: user.id });
    const refreshToken = generateRefreshToken({ id: user.id });

    // JWT만 응답에 포함
    res.status(StatusCodes.OK).success({
      ...user,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error("회원가입 에러:", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).error({
      errorCode: "SERVER_ERROR",
      reason: err.message,
    });
  }
};