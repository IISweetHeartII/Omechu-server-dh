import { changeUserPasswordService } from '../services/passwordChange.service.js';
import { bodyToChangePasswordDto } from '../dtos/passwordChange.dto.js';
import { LoginRequiredError, InvalidPasswordError } from '../errors.js';
import { StatusCodes } from 'http-status-codes';

export const handleChangePassword = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "비밀번호 변경"
  #swagger.description = "로그인한 사용자가 기존 비밀번호를 확인하고 새 비밀번호로 변경합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: "object",
          required: ["currentPassword", "newPassword"],
          properties: {
            currentPassword: { type: "string", example: "oldPass123!" },
            newPassword: { type: "string", example: "newPass456!" }
          }
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "비밀번호 변경 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: { type: "string", example: "비밀번호가 성공적으로 변경되었습니다" }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
    description: "현재 비밀번호가 틀렸거나 형식 오류",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "INVALID_PASSWORD" },
                reason: { type: "string", example: "현재 비밀번호가 일치하지 않습니다." }
              }
            },
            success: { type: "null", example: null }
          }
        }
      }
    }
  }

  #swagger.responses[401] = {
    description: "로그인하지 않은 사용자",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "LOGIN_REQUIRED" },
                reason: { type: "string", example: "로그인이 필요한 서비스입니다." }
              }
            },
            success: { type: "null", example: null }
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
                reason: { type: "string", example: "서버 내부 오류가 발생했습니다." }
              }
            },
            success: { type: "null", example: null }
          }
        }
      }
    }
  }
  */

  try {
    const userId = req.session.user?.id;
    if (!userId) throw new LoginRequiredError();

    const { currentPassword, newPassword } = bodyToChangePasswordDto(req.body);
    await changeUserPasswordService(userId, currentPassword, newPassword);

    res.success('비밀번호가 성공적으로 변경되었습니다');
  } catch (err) {
    if (err instanceof InvalidPasswordError) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: 'INVALID_PASSWORD',
        reason: err.message,
      });
    }

    if (err instanceof LoginRequiredError) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: 'LOGIN_REQUIRED',
        reason: err.message,
      });
    }

    console.error('비밀번호 변경 오류:', err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).error({
      errorCode: 'SERVER_ERROR',
      reason: '서버 내부 오류가 발생했습니다.',
    });
  }
};
