import { StatusCodes } from "http-status-codes";
import { SessionDestroyError, SessionNotFoundError } from "../errors.js";

export const handleUserLogout = async (req, res, next) => {
    /*
#swagger.tags = ["auth"]
#swagger.summary = "로그아웃"
#swagger.description = "현재 세션을 삭제하고 로그아웃합니다."

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

#swagger.responses[400] = {
  description: "세션 없음",
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
              reason: { type: "string", example: "세션이 없습니다." },
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
    return next(new SessionNotFoundError("세션이 없습니다. 이미 로그아웃 상태입니다."));
  }

  req.session.destroy((err) => {
    if (err) {
      console.error("로그아웃 - 세션 삭제 에러:", err);
      return next(new SessionDestroyError("세션 삭제를 실패했습니다."));
    }

    res.status(StatusCodes.OK).success({
      message: "로그아웃되었습니다.",
    });
  });
};
