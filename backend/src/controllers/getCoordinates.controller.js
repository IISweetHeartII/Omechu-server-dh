import { StatusCodes } from "http-status-codes";
import { getCoordinates } from "../services/getCoordinates.service.js";
export const handleGetCoordinates = async (req, res) => {
  const { lat, lng } = await getCoordinates(req.body);
  res.status(StatusCodes.OK).success({ 위도: lat, 경도: lng });
  /*
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "지도 보기 API"
  #swagger.description = "도로명 주소를 위도, 경도로 바꿔주는 API 입니다"

  #swagger.requestBody = {
  required: true,
  description: "해당 가게의 도로명 주소를 입력해주세요",
  content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          address: { type: "string", example: "서울시 성동구 왕십리로 100" }
        }
      }
    }
  }
}


  #swagger.responses[200] = {
    description: "올바르게 변환됐을 때",
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
              위도: { type: "number", format: "float", example: 37.5464691176368 },
              경도: { type: "number", format: "float", example: 127.044877811318 }
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
    description: "없는 주소일 때",
    content: {
    'application/json': {
      schema: {
        type: "object",
        properties: {
          resultType: { type: "string", example: "SUCCESS" },
          error: { 
            type: "object",
            properties:{
                errorCode:{type:"string",example:"C007"},
                reason:{type:"string",example:"해당 주소는 없는 주소입니다"},
                data:{
                    type:"object",
                    properties:{
                        address:{type:"string",example:"서울시 성동구 왕십리로 00"}}}
                } },
          success: { type: "string",example:null}
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
};
