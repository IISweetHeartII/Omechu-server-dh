import { addRest } from "../services/addRestaurant.service.js";
import { bodyToAddRest } from "../dtos/addRestaurant.dto.js";
import { StatusCodes } from "http-status-codes";
import { responsesFromAddRest } from "../dtos/addRestaurant.dto.js";
export const handleAddRestaurant = async (req, res) => {
  const rest = await addRest(bodyToAddRest(req.body, req.session.user.id));
  res.status(StatusCodes.OK).success(responsesFromAddRest(rest));
  /**
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "맛집 추가하기 API" 
  #swagger.description = "맛집을 추가하는 API입니다. <br> opening_hour에서는 모든 요일을 입력하지 않아도 됩니다. 각 요일 모두 default 값으로 <b>\"휴무\"</b> 가 들어가도록 설정했습니다. 영업하는 날의 영업시간만 넘겨주시면 됩니다"
  #swagger.parameters["id"]={
    in:"path",
    description: "해당 유저의 ID",
    required: true,
    type: "string"
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
    description: "맛집 등록 성공",
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
                name: { type: "string", example: "오메추 식당" },
                address: { type: "string", example: "서울특별시 강남구 언주로164길 17" }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
  description: "필수로 요구되는 정보가 전달되지 않았을 때",
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
              errorcode: {
                type: "string",
                example: "C005"
              },
              reason: {
                type: "string",
                example: "필수로 요구되는 정보가 전달되지 않았습니다"
              },
              data: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    example: "오메추 식당"
                  },
                  repreMenu: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        repreMenu: {
                          type: "string",
                          example: "트러플 리조또"
                        }
                      }
                    },
                    example: [
                      { "repreMenu": "트러플 리조또" },
                      { "repreMenu": "스파게티" },
                      { "repreMenu": "미트볼" }
                    ]
                  },
                  opening_hour:{
                    type:"object",
                    properties:{
                      monday: { type: "string", example: "11:00-19:00" },
                      tuesday: { type: "string", example: "11:00-19:00" },
                      thursday: { type: "string", example: "11:00-19:00" },
                      friday: { type: "string", example: "11:00-19:00" }
                }},
                address:{type:"string",example:"서울특별시 강남구 언주로164길 17"}
                }
              }
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
  description: "입력된 주소가 옳지 않을 때",
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
              reason: { type: 'string', example: '잘못된 주소입니다' },
              data: { type: 'string', example: "서울특별시 성동구 왕십리로 90" }
            }
          },
          success: { type: 'object', example: null }
        }
      }
    }
  }
}
  #swagger.responses[409] = {
  description: "동일한 맛집 정보가 등록되어 있을 때",
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
              errorcode: {
                type: "string",
                example: "C005"
              },
              reason: {
                type: "string",
                example: "이미 동일한 맛집이 등록되어 있습니다"
              },
              data: {
                type: "object",
                properties: {
                  imageUrl:{type:"string",example:"https://s3.amazonaws.com/img1.jpg"},
                  name: {
                    type: "string",
                    example: "오메추 식당"
                  },
                  repreMenu: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        repreMenu: {
                          type: "string",
                          example: "트러플 리조또"
                        }
                      }
                    },
                    example: [
                      { "repreMenu": "트러플 리조또" },
                      { "repreMenu": "스파게티" },
                      { "repreMenu": "미트볼" }
                    ]
                  },
                  opening_hour:{
                    type:"object",
                    properties:{
                      monday: { type: "string", example: "11:00-19:00" },
                      tuesday: { type: "string", example: "11:00-19:00" },
                      thursday: { type: "string", example: "11:00-19:00" },
                      friday: { type: "string", example: "11:00-19:00" }
                }},
                address:{type:"string",example:"서울특별시 강남구 언주로164길 17"}
                }
              }
            }
          }
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
          resultType: {
            type: "string",
            example: "FAIL"
          },
          error: {
            type: "object",
            properties: {
              errorcode: {
                type: "string",
                example: "C005"
              },
              reason: {
                type: "string",
                example: "서버 오류"
              },
              data: {
                type: "object",
                properties: {
                  imageUrl:{type:"string",example:"https://s3.amazonaws.com/img1.jpg"},
                  name: {
                    type: "string",
                    example: "오메추 식당"
                  },
                  repreMenu: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        repreMenu: {
                          type: "string",
                          example: "트러플 리조또"
                        }
                      }
                    },
                    example: [
                      { "repreMenu": "트러플 리조또" },
                      { "repreMenu": "스파게티" },
                      { "repreMenu": "미트볼" }
                    ]
                  },
                  opening_hour:{
                    type:"object",
                    properties:{
                      monday: { type: "string", example: "11:00-19:00" },
                      tuesday: { type: "string", example: "11:00-19:00" },
                      thursday: { type: "string", example: "11:00-19:00" },
                      friday: { type: "string", example: "11:00-19:00" }
                }},
                address:{type:"string",example:"서울특별시 강남구 언주로164길 17"}
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
