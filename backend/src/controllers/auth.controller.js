import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/auth.dto.js";
import { userSignUp } from "../services/auth.service.js";

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
          required: ['email', 'password', 'phoneNumber'],
          properties: {
            email: { type: 'string', example: 'user@example.com' },
            password: { type: 'string', example: 'user1234!' },
            phoneNumber: { type: 'string', example: '010-1234-5678' }
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
                phoneNumber: { type: "string", example: "010-1234-5678" },
                created_at: { type: "string", example: "2023-01-01T00:00:00.000Z" },
                updated_at: { type: "string", example: "2023-01-01T00:00:00.000Z" }
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
                    phoneNumber: { type: "string", example: "010-1234-5678" }
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
