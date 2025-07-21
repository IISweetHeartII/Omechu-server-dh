import { StatusCodes } from "http-status-codes";
import { getReview } from "../services/getReview.service.js";

export const handleGetReview = async (req, res) => {
  const review = await getReview({
    rest_id: parseInt(req.params.id),
    limit: parseInt(req.query.limit),
    cursor: parseInt(req.query.cursor),
  });

  res.status(StatusCodes.OK).success(review);
  /*
  #swagger.tags=["Restaurant"];
  #swagger.summary="리뷰 가져오기 API" 
  #swagger.description="리뷰 가져오기 API 입니다"
  #swagger.parameters['id']={
    id:'query',
    description:"가게 ID",
    required:'true'}

  #swagger.parameters['limit']={
    id:'query',
    description:"한 번에 가져오는 데이터 개수",
    required:'true'}

  #swagger.parameters['cursor']={
    id:'query',
    description:"받아오는 데이터들의 첫번째 ID",
    required:'true'}


  
  #swagger.responses[200] = {
  description: "리뷰 가져오기 성공",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'SUCCESS' },
          error: { type: 'object', example: null },
          success: {
            type: 'object',
            properties: {
              id: { type: 'number', example: 1 },
              rating: { type: 'number', example: 5 },
              tag: {
                type: 'array',
                items: { type: 'string', example: ['아침 식사', '점심 식사'] }
              },
              text: { type: 'string', example: '맛있습니다' },
              created_at: { type: 'string', example: '2025-07-13T06:27:50.000Z' },
              like: { type: 'number', example: 5 },
              user: {
                type: 'object',
                properties: {
                  nickname: { type: 'string', example: '랄프' }
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
              reason: { type: 'string', example: '파라미터가 없습니다' },
              data: {
                type: 'object',
                properties: {
                  rest_id: { type: 'number', example: 0 },
                  limit: { type: 'number', example: 5 }
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
  #swagger.responses[401]={
    description:"세션 유효기간이 지났을 떄, 인증되지 않은 사용자 일때",
    content:{
        'application/json' : {
            schema: {
                type:"object",
                properties:{
                    resultType:{type:"string",example:"FAIL"},
                    error:{
                        type:"object",
                        properties:{
                            errorCode:{type:"string",example:"AUTH_REQUIRED"},
                            reason:{type:"string",example:"로그인이 필요합니다"},
                            data:{type:"string",example:null}},
                            }
                        }
                    },
                success:{type:"string",example:null}
                    }}}

  #swagger.responses[404] = {
  description: "해당 가게의 리뷰가 없을 때",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              errorCode: { type: 'string', example: 'C004' },
              reason: { type: 'string', example: '해당 가게의 리뷰가 없습니다' },
              data: {
                type: 'object',
                properties: {
                  rest_id: { type: 'number', example: 7 },
                  limit: { type: 'number', example: 5 }
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
              errorCode: { type: 'string', example: 'SERVER_ERROR' },
              reason: { type: 'string', example: '서버 오류' },
              data: {
                type: 'object',
                properties: {
                  rest_id: { type: 'number', example: 7 },
                  limit: { type: 'number', example: 5 }
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
*/
};
