import { StatusCodes } from "http-status-codes";
import { addLike } from "../services/like.service.js";
import { responseFromLike } from "../dtos/like.dto.js";
export const handleLike = async (req, res) => {
  const like = await addLike({
    data: req.body,
    restId: req.params.restId,
    reviewId: req.params.reviewId,
  });

  res.status(StatusCodes.OK).success(responseFromLike(like));
  /*
  #swagger.tags=["Restaurant"]
  #swagger.summary="좋아요 누르기/취소하기"
  #swagger.description="좋아요를 누르거나 취소할 때 사용하는 API 입니다"
  #swagger.parameters["restId"]={
    in:"query",
    description:"해당 가게의 ID"
}
  #swagger.parameters["reviewId"]={
    in:"query",
    description:"해당 리뷰의 ID"
}
  #swagger.requestBody = {
  content: {
    'application/json': {
      schema: {
        type: 'object',
        required: ['like'],
        properties: {
          like: { type: 'boolean', example: true }
        }
      }
    }
  }
}
  #swagger.responses[200] = {
  description: "좋아요 누르기/취소하기 성공",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: "string", example: "SUCCESS" },
          error: { type: "object", example: null },
          success: {
            type: "object",
            properties: {
              reviewId: { type: "string", example: "42" },
              restId: { type: "string", example: "1" }
            }
          }
        }
      }
    }
  }
}
  #swagger.responses[400] = {
  description: "올바른 파라미터가 전달되지 않았을 때",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              errorCode: { type: 'string', example: 'C005' },
              reason: { type: 'string', example: '파라미터가 옳지 않습니다..' },
              data: {
                type: 'object',
                properties: {
                  rest_id: { type: 'string', example: '0' }
                }
              }
            }
          },
          success: { type: 'string', example: null }
        }
      }
    }
  }
}
  #swagger.responses[401] = {
  description: "세션 유효기간이 만료되었거나 로그인이 되지 않은 상태일 때",
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
              data: { type: "string", example: null }
            }
          },
          success: { type: "string", example: null }
        }
      }
    }
  }
}
  #swagger.responses[404] = {
  description: 'restId 와 reviewId 를 모두 만족하는 리뷰가 없을 때',
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
              reason: { type: 'string', example: '해당 리뷰의 정보가 없습니다' },
              data: {
                type: 'object',
                properties: {
                  restId: { type: 'string', example: '1' },
                  reviewId: { type: 'string', example: '1' }
                }
              }
            }
          },
          success: { type: 'string', example: null }
        }
      }
    }
  }
}
  #swagger.responses[409] = {
  description: '좋아요 수가 0개 이하일 리뷰에 대해서 발생',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              errorCode: { type: 'string', example: 'C005' },
              reason: { type: 'string', example: '해당 리뷰의 좋아요 수가 0개 이하 입니다' },
              data: {
                type: 'object',
                properties: {
                  restId: { type: 'string', example: '1' },
                  reviewId: { type: 'string', example: '1' }
                }
              }
            }
          },
          success: { type: 'object', example: null }
        }
      }
    }
  }
}
  #swagger.responses[500] = {
  description: "서버에서 오류났을 때",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "FAIL" },
          error: {
            type: "object",
            properties: {
              errorCode: { type: "string",example:"SERVER_ERROR" },
              reason: {
                type: "string",
                example: "서버 오류"
              },
              data: { 
                type: "object",
                properties: {
                  restId: { type: 'string', example: '1' },
                  reviewId: { type: 'string', example: '1' }
                  }
              }
            }
          },
          success: { type: "string", example: null}
        }
      }
    }
  }
}
   */
};
