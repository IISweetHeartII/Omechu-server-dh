import { handleAgreementConsentService, getAgreementConsentService } from "../services/agreement.service.js";
import { bodyToAgreementDto } from "../dtos/agreement.dto.js";
import { StatusCodes } from "http-status-codes";

export const handleAgreementConsent = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "약관 동의 저장"
  #swagger.description = "회원가입 시 약관 동의 여부를 저장합니다."
  #swagger.security = [{
    "bearerAuth": []
  }]

  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['termsOfService', 'privacyPolicy', 'locationService', 'isOver14'],
          properties: {
            agreeAll: { type: 'boolean', example: true },
            termsOfService: { type: 'boolean', example: true },
            privacyPolicy: { type: 'boolean', example: true },
            locationService: { type: 'boolean', example: true },
            isOver14: { type: 'boolean', example: true }
          }
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "약관 동의 저장 성공",
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
                message: { type: "string", example: "약관 동의가 완료되었습니다." }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
    description: "필수 항목 동의 누락",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "INVALID_CONSENT" },
                reason: { type: "string", example: "필수 항목에 동의하지 않았습니다." }
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
    const userId = req.user.id;
    const agreementData = bodyToAgreementDto(req.body, userId);

    await handleAgreementConsentService(agreementData);

    return res.status(StatusCodes.OK).success({
      message: "약관 동의가 완료되었습니다."
    });
  } catch (error) {
     console.error("Controller Error:", error);  
    next(error);
}
};

export const getAgreementConsent = async (req, res, next) => {
  /*
  #swagger.tags = ["Auth"]
  #swagger.summary = "약관 동의 조회"
  #swagger.description = "사용자의 가장 최신 약관 동의 내역을 조회합니다."
  #swagger.security = [{
    "bearerAuth": []
  }]

  #swagger.responses[200] = {
    description: "약관 동의 조회 성공",
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
                terms_of_service: { type: "boolean", example: true },
                privacy_policy: { type: "boolean", example: true },
                location_service: { type: "boolean", example: true },
                is_over14: { type: "boolean", example: true },
                created_at: { type: "string", example: "2023-01-01T00:00:00.000Z" }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[404] = {
    description: "약관 동의 정보 없음",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "NOT_FOUND" },
                reason: { type: "string", example: "약관 동의 정보가 존재하지 않습니다." }
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
    const userId = req.user.id;
    const consent = await getAgreementConsentService(userId);

    const serializedConsent = JSON.parse(JSON.stringify(consent, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    ));

    return res.status(StatusCodes.OK).success(serializedConsent);
  } catch (error) {
    next(error);
  }
};
