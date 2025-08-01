import { StatusCodes } from "http-status-codes";
import {
  getRecommendManagementService,
  addMenuToExceptService,
  removeMenuFromExceptService,
} from "../services/recommend.management.service.js";

/**
 * 추천 목록 관리 조회 컨트롤러
 */

export const handleGetRecommendManagement = async (req, res, next) => {
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "사용자 추천/제외 메뉴 목록 조회"
  #swagger.description = "특정 사용자의 추천 받을 수 있는 메뉴와 현재 추천에서 제외된 메뉴 목록을 함께 조회합니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '조회할 사용자 ID',
    required: true,
    schema: { type: 'string', example: 'user_123' } // 예시 ID를 좀 더 일반적인 형태로 변경
  }
  #swagger.responses[200] = {
    description: "추천/제외 메뉴 목록 조회 성공",
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
                summary: {
                  type: "object",
                  description: "메뉴 현황 요약 정보",
                  properties: {
                    totalMenus: { type: "integer", example: 50, description: "전체 메뉴 수" },
                    recommendMenus: { type: "integer", example: 45, description: "현재 추천 가능한 메뉴 수" },
                    exceptedMenus: { type: "integer", example: 5, description: "추천에서 제외된 메뉴 수" }
                  }
                },
                recommendMenus: {
                  type: "array",
                  description: "추천 가능한 메뉴 목록",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "menu_001", description: "메뉴 고유 ID" }, // 예시 ID를 좀 더 명확하게 변경
                      name: { type: "string", example: "짜장면", description: "메뉴 이름" },
                      image_link: { type: "string", example: "https://example.com/jjajangmyeon.jpg", description: "메뉴 이미지 URL" } // 예시 링크를 구체적으로 변경
                    }
                  }
                },
                exceptedMenus: {
                  type: "array",
                  description: "추천에서 제외된 메뉴 목록",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "menu_002", description: "메뉴 고유 ID" },
                      name: { type: "string", example: "짬뽕", description: "메뉴 이름" },
                      image_link: { type: "string", example: "https://example.com/jjamppong.jpg", description: "메뉴 이미지 URL" }
                    }
                  }
                }
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
                errorCode: { type: "string", example: "P001", description: "오류 코드" },
                reason: { type: "string", example: "사용자 ID가 필요합니다.", description: "오류 발생 원인" },
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
  #swagger.responses[500] = {
    description: "서버 내부 오류: 추천 목록 조회 처리 중 문제 발생",
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
                reason: { type: "string", example: "추천 목록 관리 조회 중 예기치 않은 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", description: "오류 발생 원인" },
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
    const result = await getRecommendManagementService(parseInt(userId));
    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};

/**
 * 메뉴 제외 추가 컨트롤러 (추천 받지 않기)
 */

export const handleAddMenuToExcept = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { menuId, menuName } = req.body;

    const result = await addMenuToExceptService(
      parseInt(userId),
      menuId ? parseInt(menuId) : null,
      menuName
    );

    res.status(StatusCodes.CREATED).success(result);
  } catch (error) {
    next(error);
  }
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "메뉴 제외 목록에 추가"
  #swagger.description = "특정 메뉴를 사용자의 제외 목록에 추가하여 더 이상 추천받지 않도록 설정합니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '메뉴를 제외할 사용자 ID',
    required: true,
    schema: { type: 'string', example: 'user_123' }
  }
  #swagger.requestBody = {
    required: true,
    description: '제외 목록에 추가할 메뉴의 ID 또는 이름',
    content: {
      'application/json': {
        schema: {
          oneOf: [ // menuId 또는 menuName 중 하나는 필수
            {
              type: 'object',
              required: ['menuId'],
              properties: {
                menuId: { type: 'string', example: 'menu_001', description: '추가할 메뉴의 고유 ID' }
              }
            },
            {
              type: 'object',
              required: ['menuName'],
              properties: {
                menuName: { type: 'string', example: '짜장면', description: '추가할 메뉴의 이름' }
              }
            }
          ]
        },
        examples: {
          menuIdExample: {
            summary: '메뉴 ID로 추가',
            value: { menuId: 'menu_001' }
          },
          menuNameExample: {
            summary: '메뉴 이름으로 추가',
            value: { menuName: '짜장면' }
          }
        }
      }
    }
  }
  #swagger.responses[201] = {
    description: "메뉴 제외 목록에 성공적으로 추가됨",
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
                id: { type: "string", example: "exclude_item_10", description: "추가된 제외 항목의 고유 ID" }, // 생성된 항목의 ID 예시
                menu: {
                  type: "object",
                  description: "제외된 메뉴 정보",
                  properties: {
                    id: { type: "string", example: "menu_001", description: "메뉴 고유 ID" },
                    name: { type: "string", example: "짜장면", description: "메뉴 이름" },
                    image_link: { type: "string", example: "https://example.com/jjajangmyeon.jpg", description: "메뉴 이미지 URL" }
                  }
                },
                message: { type: "string", example: "메뉴가 제외 목록에 성공적으로 추가되었습니다. 이제 해당 메뉴는 추천되지 않습니다.", description: "성공 메시지" }
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
    description: "메뉴를 찾을 수 없음: 제공된 ID/이름에 해당하는 메뉴 부재",
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
                reason: { type: "string", example: "제공된 ID 또는 이름에 해당하는 메뉴를 찾을 수 없습니다.", description: "오류 발생 원인" },
                data: { type: "object", example: { searchedBy: "menuName", value: "없는메뉴" }, description: "찾지 못한 기준 및 값" } // 예시 추가
              }
            },
            success: { type: "object", example: null, description: "오류 발생 시 null" }
          }
        }
      }
    }
  }
  #swagger.responses[409] = {
    description: "충돌: 이미 제외된 메뉴",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL", description: "요청 처리 결과 타입" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C007", description: "오류 코드 (충돌 관련 오류 코드 고려)" }, // C007 대신 더 적합한 충돌 코드 사용 고려
                reason: { type: "string", example: "해당 메뉴는 이미 제외 목록에 존재합니다.", description: "오류 발생 원인" },
                data: { type: "object", example: { menuId: "menu_001" }, description: "이미 제외된 메뉴 정보" }
              }
            },
            success: { type: "object", example: null, description: "오류 발생 시 null" }
          }
        }
      }
    }
  }
  #swagger.responses[500] = {
    description: "서버 내부 오류: 메뉴 제외 처리 중 문제 발생",
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
                reason: { type: "string", example: "메뉴 제외 추가 처리 중 예기치 않은 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", description: "오류 발생 원인" },
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
};

/**
 * 메뉴 제외 해제 컨트롤러 (다시 추천 받기)
 */

export const handleRemoveMenuFromExcept = async (req, res, next) => {
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
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "메뉴 제외 목록에서 제거"
  #swagger.description = "사용자의 제외 목록에서 특정 메뉴를 제거하여 해당 메뉴를 다시 추천받을 수 있도록 설정합니다."

  #swagger.parameters['userId'] = {
    in: 'path',
    description: '메뉴 제외 목록을 관리할 사용자 ID',
    required: true,
    schema: { type: 'string', example: 'user_123' } // 예시 ID를 좀 더 일반적인 형태로 변경
  }

  #swagger.requestBody = {
    required: true,
    description: '제외 목록에서 제거할 메뉴의 ID 또는 이름',
    content: {
      'application/json': {
        schema: {
          oneOf: [ // menuId 또는 menuName 중 하나는 필수
            {
              type: 'object',
              required: ['menuId'],
              properties: {
                menuId: { type: 'string', example: 'menu_005', description: '제거할 메뉴의 고유 ID' } // 예시 ID 변경
              }
            },
            {
              type: 'object',
              required: ['menuName'],
              properties: {
                menuName: { type: 'string', example: '라멘', description: '제거할 메뉴의 이름' }
              }
            }
          ]
        },
        examples: {
          menuIdExample: {
            summary: '메뉴 ID로 제거',
            value: { menuId: 'menu_005' }
          },
          menuNameExample: {
            summary: '메뉴 이름으로 제거',
            value: { menuName: '라멘' }
          }
        }
      }
    }
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
                  example: { searchedBy: "menuId", value: "unknown_menu_id" }, // 예시 값 변경
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
};
