import { StatusCodes } from "http-status-codes";
import { reportReveiw } from "../services/reportReview.service.js";
export const handleReportReview = async (req, res) => {
  const reportId = await reportReveiw({
    reason: req.body.reason,
    userId: req.user.id,
    reviewId: req.params.reviewId,
  });
  res.status(StatusCodes.OK).success(reportId);
  /*
  #swagger.tags=["Restaurant"]
  #swagger.summary="리뷰 신고하기 API"
  #swagger.description="해당 리뷰를 신고하는 API 입니다"
  #swagger.parameters["id"]={
    in:"path",
    description:"해당 리뷰의 ID",
    required:true
 }
  #swagger.requestBody={
  required:true,
    content:{
        'application/json' : {
            schema:{
            type:"object",
            properties:{
                reason:{type:"string",example:"허위사실"}
            }
                }}}}

  #swagger.responses[200] = {
  description: "리뷰 신고하기 성공",
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
              id: { type: 'string', example: "1" },
              userId: { type: 'string', example: "5" },
              reviewId: { type: 'string', example: "5" },
              reason: { type: 'string', example: '허위사실' }
            }
          }
        }
      }
    }
  }
}

#swagger.responses[400] = {
  description: "올바른 파라미터를 전달하지 않았을 때",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              errorCode: { type: 'string', example: 'P001' },
              reason: { type: 'string', example: '파라미터가 잘못되었습니다.' },
              data: {
                type: 'object',
                properties: {
                  reason: { type: 'string', example: '' },
                  reviewId: { type: 'string', example: '101' }
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
  description: "해당 리뷰 데이터가 없을 때",
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          resultType: { type: 'string', example: 'FAIL' },
          error: {
            type: 'object',
            properties: {
              errorCode: { type: 'string', example: 'P001' },
              reason: { type: 'string', example: '해당 리뷰의 데이터가 없습니다.' },
              data: {
                type: 'object',
                properties: {
                  reviewId: { type: 'string', example: '101' }
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
   
   */
};
