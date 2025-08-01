import { removeMenuFromExceptService } from "../services/recommend.management.service.js";
export const handleRemoveMenuFromExcept = async (req, res, next) => {
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "메뉴 제외 목록에서 제거"
  #swagger.description = "사용자의 제외 목록에서 특정 메뉴를 제거하여 해당 메뉴를 다시 추천받을 수 있도록 설정합니다."

  #swagger.parameters['userId'] = {
    in: 'path',
    description: '메뉴 제외 목록을 관리할 사용자 ID',
    required: true,
  }
  #swagger.requestBody = {
  required: true,
  description: "제외 목록에서 제거할 메뉴의 ID 또는 이름 (둘 중 하나를 반드시 제공)",
}
#swagger.responses[200] = {
    description: "메뉴 제외 목록에서 성공적으로 제거됨",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS", description: "요청 처리 결과 타입" },
            error: { type: "object", example: null, description: "오류가 없는 경우 null" },
            success: {
              type: "object",
              properties: {
                success: { type: "boolean", example: true, description: "요청 성공 여부" },
                message: { type: "string", example: "메뉴가 제외 목록에서 성공적으로 제거되었습니다. 이제 다시 추천을 받을 수 있습니다.", description: "성공 메시지" }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
    description: "잘못된 요청: 필수 파라미터 누락 또는 유효하지 않은 값",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL", description: "요청 처리 결과 타입" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C006", description: "오류 코드" },
                reason: { type: "string", example: "요청 본문에 menuId 또는 menuName 중 하나가 반드시 포함되어야 합니다.", description: "오류 발생 원인" },
                data: { type: "object", example: {}, description: "관련 추가 데이터 (선택 사항)" }
              }
            },
            success: { type: "object", example: null, description: "오류 발생 시 null" }
          }
        }
      }
    }
  }

  #swagger.responses[401] = {
    description: "인증 실패: 유효한 인증 정보 필요",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL", description: "요청 처리 결과 타입" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "AUTH_REQUIRED", description: "오류 코드" },
                reason: { type: "string", example: "유효한 인증 정보가 필요합니다.", description: "오류 발생 원인" },
                data: { type: "object", example: null, description: "관련 추가 데이터 (선택 사항)" }
              }
            },
            success: { type: "object", example: null, description: "오류 발생 시 null" }
          }
        }
      }
    }
  }

  #swagger.responses[404] = {
    description: "제외 목록에서 메뉴를 찾을 수 없음: 제공된 정보와 일치하는 메뉴 부재",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL", description: "요청 처리 결과 타입" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C007", description: "오류 코드" },
                reason: { type: "string", example: "제공된 정보와 일치하는 메뉴를 제외 목록에서 찾을 수 없습니다.", description: "오류 발생 원인" },
                data: {
                  type: "object",
                  example: { searchedBy: "menuId", value: "unknown_menu_id" }, 
                  description: "메뉴를 찾지 못한 기준 및 값"
                }
              }
            },
            success: { type: "object", example: null, description: "오류 발생 시 null" }
          }
        }
      }
    }
  }

  #swagger.responses[500] = {
    description: "서버 내부 오류: 메뉴 제외 해제 처리 중 문제 발생",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL", description: "요청 처리 결과 타입" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C004", description: "오류 코드" },
                reason: { type: "string", example: "메뉴 제외 목록에서 제거 처리 중 예기치 않은 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", description: "오류 발생 원인" },
                data: { type: "object", example: {}, description: "관련 추가 데이터 (선택 사항)" }
              }
            },
            success: { type: "object", example: null, description: "오류 발생 시 null" }
          }
        }
      }
    }
  }
*/
  try {
    const { userId } = req.params;
    const { menuId, menuName } = req.body;

    const result = await removeMenuFromExceptService(
      parseInt(userId),
      menuId ? parseInt(menuId) : null,
      menuName
    );

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};
