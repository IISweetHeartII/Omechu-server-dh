// src/controllers/recommend.management.controller.js
import { StatusCodes } from "http-status-codes";
import {
  getRecommendManagementService,
  addMenuToExceptService,
  removeMenuFromExceptService
} from '../services/recommend.management.service.js';

/**
 * 추천 목록 관리 조회 컨트롤러
 */
export const handleGetRecommendManagement = async (req, res, next) => {
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "추천 목록 관리 조회 API"
  #swagger.description = "사용자의 추천 받을 메뉴와 제외된 메뉴 목록을 조회하는 API입니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'string'
  }
  #swagger.responses[200] = {
    description: "추천 목록 관리 조회 성공",
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
                summary: {
                  type: "object",
                  properties: {
                    totalMenus: { type: "integer", example: 50 },
                    recommendMenus: { type: "integer", example: 45 },
                    exceptedMenus: { type: "integer", example: 5 }
                  }
                },
                recommendMenus: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "1" },
                      name: { type: "string", example: "짜장면" },
                      image_link: { type: "string", example: "https://example.com/image.jpg" }
                    }
                  }
                },
                exceptedMenus: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "2" },
                      name: { type: "string", example: "짬뽕" },
                      image_link: { type: "string", example: "https://example.com/image2.jpg" }
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
    description: "잘못된 요청 (사용자 ID 누락 등)",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "P001" },
                reason: { type: "string", example: "사용자 ID가 필요합니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[401] = {
    description: "인증 필요",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "AUTH_REQUIRED" },
                reason: { type: "string", example: "로그인이 필요합니다" },
                data: { type: "object", example: null }
              }
            },
            success: { type: "object", example: null }
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
                errorCode: { type: "string", example: "C004" },
                reason: { type: "string", example: "추천 목록 관리 조회 중 오류가 발생했습니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
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
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "메뉴 제외 목록 추가 API"
  #swagger.description = "특정 메뉴를 제외 목록에 추가하여 추천받지 않도록 설정합니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'string'
  }
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            menuId: { type: 'string', example: '1', description: '메뉴 ID (menuName과 둘 중 하나 필수)' },
            menuName: { type: 'string', example: '짜장면', description: '메뉴 이름 (menuId와 둘 중 하나 필수)' }
          }
        }
      }
    }
  }
  #swagger.responses[201] = {
    description: "메뉴 제외 추가 성공",
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
                id: { type: "string", example: "10" },
                menu: {
                  type: "object",
                  properties: {
                    id: { type: "string", example: "1" },
                    name: { type: "string", example: "짜장면" },
                    image_link: { type: "string", example: "https://example.com/image.jpg" }
                  }
                },
                message: { type: "string", example: "메뉴가 제외 목록에 추가되었습니다." }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 요청 (파라미터 누락, 이미 제외된 메뉴 등)",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C006" },
                reason: { type: "string", example: "메뉴 ID 또는 메뉴 이름이 필요합니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[401] = {
    description: "인증 필요",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "AUTH_REQUIRED" },
                reason: { type: "string", example: "로그인이 필요합니다" },
                data: { type: "object", example: null }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[404] = {
    description: "해당 이름의 메뉴를 찾을 수 없음",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C007" },
                reason: { type: "string", example: "해당 이름의 메뉴를 찾을 수 없습니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[409] = {
    description: "이미 제외된 메뉴일 때",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C007" },
                reason: { type: "string", example: "이미 제외된 메뉴입니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
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
                errorCode: { type: "string", example: "C004" },
                reason: { type: "string", example: "메뉴 제외 처리 중 오류가 발생했습니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  */

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
};

/**
 * 메뉴 제외 해제 컨트롤러 (다시 추천 받기)
 */
export const handleRemoveMenuFromExcept = async (req, res, next) => {
  /*
  #swagger.tags = ["Recommend"]
  #swagger.summary = "메뉴 제외 목록 제거 API"
  #swagger.description = "제외 목록에서 메뉴를 제거하여 다시 추천받을 수 있도록 설정합니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'string'
  }
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            menuId: { type: 'string', example: '5', description: '메뉴 ID (menuName과 둘 중 하나 필수)' },
            menuName: { type: 'string', example: '라멘', description: '메뉴 이름 (menuId와 둘 중 하나 필수)' }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "메뉴 제외 해제 성공",
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
                success: { type: "boolean", example: true },
                message: { type: "string", example: "메뉴가 제외 목록에서 제거되었습니다. 이제 추천을 받을 수 있습니다." }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 요청 (파라미터 누락 등)",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C006" },
                reason: { type: "string", example: "메뉴 ID 또는 메뉴 이름이 필요합니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[401] = {
    description: "인증 필요",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "AUTH_REQUIRED" },
                reason: { type: "string", example: "로그인이 필요합니다" },
                data: { type: "object", example: null }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[404] = {
    description: "제외 목록에서 해당 메뉴를 찾을 수 없음",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C007" },
                reason: { type: "string", example: "제외 목록에서 해당 메뉴를 찾을 수 없습니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
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
                errorCode: { type: "string", example: "C004" },
                reason: { type: "string", example: "메뉴 제외 해제 처리 중 오류가 발생했습니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
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