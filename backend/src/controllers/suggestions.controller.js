import { StatusCodes } from "http-status-codes";
import { getMenuData } from "../services/suggestions.service.js";
export const handleSuggestion = async (req, res) => {
  /*
  #swagger.tags=["Restaurant"]
  #swagger.summary="메뉴 자동완성 API"
  #swagger.description="메뉴 자동완성 API 입니다"
  #swagger.parameters["menu"]={
    in:"query",
    description:"검색하려는 음식명",
    required:true,
    example:"김치"
    } 
    
  #swagger.responses[200] = {
  description: "추천 검색어를 정상적으로 가져왔을 때",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "SUCCESS" },
          error: { type: ["string", "null"], example: null },
          success: {
            type: "array",
            items: {
              type: "object",
              properties: {
                menu: { type: "string", example: "김치" }
              }
            },
            example: [
              { menu: "김치전" },
              { menu: "김치찌개" },
              { menu: "김치콩나물국" },
              { menu: "김치피자탕수육" }
            ]
          }
        }
      }
    }
  }
}
  #swagger.responses[401] = {
  description: "인가되지 않은 사용자일 때",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              errorCode: { type: 'string', example: 'AUTH_REQUIRED' },
              reason: { type: 'string', example: '로그인이 필요합니다' },
              data: { type: 'string', example: null }
            }
          },
          success: { type: 'object', example: null }
        }
      }
    }
  }
}
  #swagger.responses[404] = {
  description: "해당 메뉴의 정보가 없을 때",
  content: {
    'application/json': {
      schema: {
        description: "해당 키워드를 가진 맛집 정보가 없을 때",
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string", example: "C004" },
              reason: { type: "string", example: "해당 키워드를 가진 맛집 정보가 없습니다" },
              data: { type: "string",example:"떡갈비"}
            }
          },
          success: { type: ["string", "null"], example: null }
        }
      }
    }
  }
}
  #swagger.responses[500] = {
  description: "서버 에러",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              reason: { type: 'string', example: '서버 에러' }
            }
          },
          success: { type: 'object', example: null }
        }
      }
    }
  }
}
    */
  const menuData = await getMenuData(req.query.menu);
  res.status(StatusCodes.OK).success(menuData);
};
