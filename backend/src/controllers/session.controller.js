import { StatusCodes } from "http-status-codes";
import { SessionDestroyError, SessionNotFoundError, SessionRegenerateError } from "../errors.js";

export const handleRenewSession = async (req, res, next) => {
    /*
#swagger.tags = ["Auth"]
#swagger.summary = "세션 재발급"
#swagger.description = "세션 재발급 API입니다. 기존 세션을 삭제하고 새로운 세션을 발급합니다."

#swagger.requestBody = {
  required: true,
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          email: { type: 'string', example: 'user@example.com' }
        }
      }
    }
  }
}

#swagger.responses[200] = {
  description: "세션 재발급 성공",
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
              message: { type: "string", example: "세션이 재발급되었습니다." },
              session: {
                type: "object",
                properties: {
                  id: { type: "number", example: 1 },
                  email: { type: "string", example: "user@example.com" }
                }
              },
              sessionId: { type: "string" }
            }
          }
        }
      }
    }
  }
}

#swagger.responses[400] = {
  description: "세션 관련 에러 (세션 없음 / 삭제 실패 / 재생성 실패)",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string", example: "SESSION_ERROR" },
              reason: { type: "string", example: "세션 처리 중 오류가 발생했습니다." },
              data: { type: "object", example: null }
            }
          },
          success: { type: "string", example: "null" }
        }
      }
    }
  }
}
*/

  if (!req.session.user) {
    return next(new SessionNotFoundError("세션이 없습니다."));
  }

  req.session.destroy((err) => {
    if (err) {
      console.error("세션 삭제 에러:", err);
      return next(new SessionDestroyError("세션 삭제를 실패했습니다."));
    }

    // 세션 삭제 후 새로운 세션을 생성
    req.sessionStore.generate(req);

    req.session.user = {
      id: req.body.id,
      email: req.body.email,
    };

    res.status(StatusCodes.OK).success({
      message: "세션이 재발급되었습니다.",
      session: req.session.user,
      sessionId: req.sessionID, 
    });
  });
};

