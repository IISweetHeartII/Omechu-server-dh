import { getRestaurant } from "../services/getRestaurant.service.js";
import { bodyToGetRest } from "../dtos/getRestaurant.dto.js";
import { StatusCodes } from "http-status-codes";
export const handleGetRestaurant = async (req, res) => {
  const restData = await getRestaurant(
    bodyToGetRest({
      data: req.body,
      cursor: req.query.cursor,
      limit: req.query.limit,
    })
  );
  res.status(StatusCodes.OK).success(restData);
  /*
  #swagger.tags=["Restaurant"]
  #swagger.summary="맛집 정보 가져오기 API"
  #swagger.description="맛집 정보를 가져오는 API 입니다"
  #swagger.parameters["cursor"]={
    in:"query",
    description:"가져오려는 데이터의 첫번째 ID 값",
    required:true
    } 

  #swagger.parameters["limit"]={
    in:"query",
    description:"한 번에 가져오는 데이터의 양",
    required:true
    }
  
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: "object",
          required: ["location", "keyword"],
          properties: {
            location: {
              type: "array",
              items: { type: "string" },
              example: ["서울 강북구 송중동", "서울 강남구 신사동"]
            },
            keyword: {
              type: "array",
              items: { type: "string" },
              example: ["야식", "저녁식사"]
            }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
  description: "올바른 맛집 정보를 가져왔을 때",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "SUCCESS" },
          error: { type: "string", example: null },
          success: {
            type: "object",
            properties: {
              restData: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "string", example: "1" },
                    name: { type: "string", example: "오메추식당" },
                    rest_image: { type: "string", example: "https://s3.amazonaws.com/img1.jpg" },
                    address: { type: "string", example: "서울특별시 강남구 언주로164길 20" },
                    rating: { type: "number", example: 1 },
                    match_score: { type: "number", example: 0 },
                    rest_tag: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          tag: { type: "string", example: "아침식사" },
                          count: { type: "number", example: 3 }
                        }
                      }
                    }
                  }
                },
                example:[
            {
                "id": "12",
                "name": "오메추 식당",
                "rest_image": "https://s3.amazonaws.com/img1.jpg",
                "address": "서울특별시 성동구 왕십리로 100",
                "rating": 0,
                "match_score": 1,
                "rest_tag": [
                    {
                        "tag": "아침식사",
                        "count": 3
                    }
                ]
            },
            {
                "id": "117",
                "name": "오메추식당",
                "rest_image": "https://s3.amazonaws.com/img1.jpg",
                "address": "서울특별시 강남구 언주로164길 20",
                "rating": 0,
                "match_score": 0,
                "rest_tag": []
            },
            {
                "id": "118",
                "name": "오메추식당",
                "rest_image": "https://s3.amazonaws.com/img1.jpg",
                "address": "서울특별시 강남구 언주로164길 13",
                "rating": 0,
                "match_score": 0,
                "rest_tag": []
            }
        ]
              },
        hasNextPage:{type:"string",example:false},
        nextCursor:{type:"string",example:null}  
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
        oneOf: [
          {
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
                    type: "array",
                    items: { type: "string" },
                    example: ["고급스러운", "깔끔한"]
                  }
                }
              },
              success:{type:"string",example:null}
            }
          },
          {
            description: "해당 위치를 가진 맛집 정보가 없을 때",
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "C004" },
                  reason: { type: "string", example: "해당 위치의 맛집 정보가 없습니다" },
                  data: {
                    type: "array",
                    items: { type: "string" },
                    example: ["서울 성동구 성수동2가"]
                  }
                }
              },
              success:{type:"string",example:null}
            }
          },
          {
            description: "해당 위치와 키워드를 가진 맛집 정보가 없을 때",
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "C004" },
                  reason: { type: "string", example: "해당 위치와 키워드를 가진 맛집 정보가 없습니다" },
                  data: {
                    type: "object",
                    properties: {
                      location: {
                        type: "array",
                        items: { type: "string" },
                        example: ["서울 성동구 성수동2가"]
                      },
                      keyword: {
                        type: "array",
                        items: { type: "string" },
                        example: ["고급스러운"]
                      }
                    }
                  }
                }
              }
            }
          }
        ]
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
};
