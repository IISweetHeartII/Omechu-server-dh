import { StatusCodes } from "http-status-codes";
import { BodyToSearchRestaurant } from "../dtos/getSearchRestaurant.dto.js";
import { getSearchRestaurant } from "../services/getSearchRestaurant.service.js";
export const handleSearchRestaurant = async (req, res) => {
  /*
  #swagger.tags=["Restaurant"]
  #swagger.summary="맛집 정보 검색하기 API"
  #swagger.description="맛집 정보를 검색하는 API 입니다"
  #swagger.parameters["menu"]={
    in:"query",
    description:"검색하려는 음식명",
    required:true,
    example:"스파게티"
    } 
    #swagger.parameters["tag"]={
    in:"query",
    description:"맛집 필터링 시 태그 이름",
    example:"아침식사"
    } 
    #swagger.parameters["location"]={
    in:"query",
    description:"맛집 필터링 시 위치명",
    example:"서울 강남구 신사동"
    } 
  #swagger.parameters["cursor"]={
    in:"query",
    description:"가져오려는 데이터의 첫번째 ID 값",
    required:true,
    example:0
    } 
  
  #swagger.parameters["limit"]={
    in:"query",
    description:"한 번에 가져오는 데이터의 양",
    required:true,
    example:5
    }
  #swagger.responses[200] = {
  description: "올바른 맛집 정보를 가져왔을 때",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "SUCCESS" },
          error: { type: ["string", "null"], example: null },
          success: {
            type: "object",
            properties: {
              restData: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "string", example: "1" },
                    rest_image: { type: "string", example: "https://s3.amazonaws.com/img1.jpg" },
                    name: { type: "string", example: "오메추식당" },
                    address: { type: "string", example: "서울특별시 강남구 언주로164길 20" },
                    rating: { type: "number", example: 4.6 },
                    rest_tag: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          tag: { type: "string", example: "아침식사" },
                          count: { type: "number", example: 19 }
                        }
                      }
                    },
                    repre_menu: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          menu: { type: "string", example: "트러플 리조또" }
                        }
                      }
                    },
                    zzim: { type: "boolean", example: true },
                    _count: {
                      type: "object",
                      properties: {
                        review: { type: "number", example: 22 }
                      }
                    }
                  }
                }
              },
              hasNextPage: { type: "boolean", example: false },
              nextCursor: { type: ["string", "null"], example: null }
            }
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
  description: "위치 또는 키워드 조건에 해당하는 맛집 정보가 없을 때",
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
              data: {
                type: "object",
                properties: {
                  menu: { type: "string", example: "김치찌개" },
                  location: { type: "string", example: "서울 강남구 신사동" },
                  tag: {
                    type: "array",
                    items: {
                      type: "string",
                      example: "데이트"
                    },
                    example: ["데이트", "아침식사", "저녁식사"] 
                  }
                }
              }
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
  const restData = await getSearchRestaurant(
    BodyToSearchRestaurant(
      req.query,
      req.user.id,
      req.query.cursor,
      req.query.limit
    )
  );
  res.status(StatusCodes.OK).success(restData);
};
