import { StatusCodes } from "http-status-codes";
import { patchUserProfileService } from "../services/user.service.js";
import { LoginRequiredError, UserUpdateFailedError } from "../errors.js";

export const handleUpdateUserInfo = async (req, res, next) => {
      /*
    #swagger.summary = '회원 정보 수정 API'
    #swagger.tags = ['Auth']
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              password: { type: "string" },
              nickname: { type: "string" },
              profileImageUrl: { type: "string" },
              gender: { type: "string", enum: ["남자", "여자"] },
              body_type: { type: "string" },
              state: { type: "string", enum: ["다이어트 중", "중량 중", "유지 중"] },
              phoneNumber: { type: "string" },
              prefer: { type: "array", items: { type: "string" } },
              allergy: { type: "array", items: { type: "string" } }
            }
          }
        }
      }
    };
    #swagger.responses[200] = {
      description: "회원 정보 수정 성공 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  email: { type: "string" },
                  nickname: { type: "string" },
                  profileImageUrl: { type: "string" },
                  gender: { type: "string" },
                  body_type: { type: "string" },
                  state: { type: "string" },
                  prefer: { type: "array", items: { type: "string" } },
                  allergy: { type: "array", items: { type: "string" } }
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[500] = {
      description: "회원 정보 수정 실패 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "C001" },
                  reason: { type: "string" },
                  data: { type: "object", nullable: true }
                }
              },
              success: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    };
  */

  try {
    console.log("회원 정보 수정을 요청했습니다!");
    console.log("body:", req.body);

    const userId = req.session.user?.id;
    if (!userId) {
      throw new LoginRequiredError("로그인이 필요한 서비스입니다.");
    }

    const updatedUserInfo = await patchUserProfileService(userId, req.body);

    res.status(StatusCodes.OK).success(updatedUserInfo);
  } catch (error) {
    throw new UserUpdateFailedError("회원 정보 수정 중 오류 발생", err);
  }
};
