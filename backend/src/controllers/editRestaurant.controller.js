import { editRestaurant } from "../services/editRestaurant.service.js";
import { bodyToEditRestaurant } from "../dtos/editRestaurant.dto.js";
import { StatusCodes } from "http-status-codes";
export const handleEditRestaurant = async (req, res) => {
  const restId = await editRestaurant(
    bodyToEditRestaurant(req.body, req.params.id, req.session.user.id)
  );
  res.status(StatusCodes.OK).success(restId);
  /**
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "특정 맛집 정보 수정하기 API" 
  #swagger.description = "특정 맛집 정보 수정하는 API입니다."
  #swagger.parameters["id"]={
    in:"path",
    description:"가게 ID",
    required:true
    }

  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            imageUrl: {
              type: "string",
              example: "https://s3.amazonaws.com/img1.jpg"
            },
            name: {
              type: "string",
              example: "오메추식당"
            },
            repre_menu: {
              type: "array",
              items: {
                type: "string"
              },
              example: ["트러플 리조또", "스파게티", "미트볼"]
            },
            opening_hour: {
              type: "object",
              properties: {
                monday: { type: "string", example: "11:00-19:00" },
                tuesday: { type: "string", example: "11:00-19:00" },
                thursday: { type: "string", example: "11:00-19:00" },
                friday: { type: "string", example: "11:00-19:00" },
              }
            },
            address: {
              type: "string",
              example: "서울특별시 강남구 언주로164길 17"
            }
          }
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "맛집 정보 변경 성공",
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
                id: { type: "string", example: "1" },
                user_id: { type: "string", example: "5" },
                rest_id: { type: "string", example: "12" }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
  description: "본인이 작성한 맛집이 아닐 때",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: {
            type: "string",
            example: "FAIL"
          },
          error: {
            type: "object",
            properties: {
              errorCode: {
                type: "string",
                example: "C005"
              },
              reason: {
                type: "string",
                example: "당신이 작성한 가게가 아닙니다"
              },
              data: {
                type: "object",
                properties: {
                  userId: {
                    type: "string",
                    example: "5"
                  }
                }
              }
            }
          },
          success: {
            type: "string",
            example: null
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
  description: "잘못된 주소를 입력했을 때",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              errorCode: { type: 'string', example: 'C007' },
              reason: { type: 'string', example: '없는 주소입니다' },
              data: { type: 'string', example: "서울특별시 성동구 왕십리로 10" }
            }
          },
          success: { type: 'object', example: null }
        }
      }
    }
  }
}

#swagger.responses[500] = {
  description: "서버 오류",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string", example: "C005" },
              reason: { type: "string", example: "서버 오류" },
              data: {
                type: "object",
                properties: {
                  imageUrl: { type: "string", example: "https://s3.amazonaws.com/img1.jpg" },
                  name: { type: "string", example: "오메추 식당" },
                  repreMenu: {
                    type: "array",
                    items: { type: "string" },
                    example: ["트러플 리조또", "스파게티", "미트볼"]
                  },
                  opening_hour: {
                    type: "object",
                    properties: {
                      monday: { type: "string", example: "11:00-19:00" },
                      tuesday: { type: "string", example: "11:00-19:00" },
                      thursday: { type: "string", example: "11:00-19:00" },
                      friday: { type: "string", example: "11:00-19:00" }
                    }
                  },
                  address: { type: "string", example: "서울특별시 강남구 언주로164길 17" }
                }
              }
            }
          }
        }
      }
    }
  }
}
*/
};
