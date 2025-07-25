import {
  createPasswordResetTokenService,
  validatePasswordResetTokenService,
  resetUserPasswordService,
} from '../services/passwordReset.service.js';
import { bodyToResetRequestDto, bodyToResetPasswordDto } from '../dtos/passwordReset.dto.js';

export const handleResetRequest = async (req, res, next) => {
/*
#swagger.tags = ["Auth"]
#swagger.summary = "비밀번호 재설정 요청"
#swagger.description = "사용자가 이메일을 입력하면 비밀번호 재설정 링크를 이메일로 발송합니다."

#swagger.requestBody = {
  required: true,
  content: {
    'application/json': {
      schema: {
        type: "object",
        required: ["email"],
        properties: {
          email: { type: "string", example: "user@example.com" }
        }
      }
    }
  }
}

#swagger.responses[200] = {
  description: "비밀번호 재설정 링크 발송 성공",
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
              message: { type: "string", example: "비밀번호 재설정 링크를 이메일로 보냈습니다" },
              token: { type: "string", example: "예시용 테스트 토큰" }
            }
          }
        }
      }
    }
  }
}

*/

  try {
    const { email } = bodyToResetRequestDto(req.body);
    const token = await createPasswordResetTokenService(email);
    res.success({
      message: '비밀번호 재설정 링크를 이메일로 보냈습니다',
      token,   
    });
  } catch (err) {
    next(err);
  }
};

export const handleResetPassword = async (req, res, next) => {
/*
  #swagger.tags = ["Auth"]
  #swagger.summary = "비밀번호 재설정"
  #swagger.description = "토큰을 검증하고, 사용자가 입력한 새 비밀번호로 변경합니다."

  #swagger.parameters['token'] = {
    in: 'query',
    description: '비밀번호 재설정 토큰',
    required: true,
    type: 'string'
  }

  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: "object",
          required: ["newPassword"],
          properties: {
            newPassword: { type: "string", example: "newSecurePassword123!" }
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
*/

  try {
    const { token } = req.query;
    const { newPassword } = bodyToResetPasswordDto(req.body);

    const email = await validatePasswordResetTokenService(token);
    await resetUserPasswordService(email, newPassword, token);

    res.success('비밀번호가 성공적으로 변경되었습니다');
  } catch (err) {
    next(err);
  }
};
