import { StatusCodes } from "http-status-codes";
import { insertMukburimService } from '../services/mukburim.service.js';

export const handleInsertMukburim = async (req, res) => {

  try {
    const { menu_name } = req.body;

    const mukburimData = {
      menu_name
    };
    console.log(req.session.user);
    mukburimData.user_id = req.session.user.id;
    console.log("User ID from session:", mukburimData.user_id);
    const now = new Date();
    const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000); // UTC 기준 +9시간
    mukburimData.date = koreaTime;
    const result = await insertMukburimService(mukburimData);

    res.status(StatusCodes.CREATED).success(result);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message
    });
  }

  /*
  #swagger.tags = ["Mukburim"]
  #swagger.summary = "먹부림 기록 등록 API"
  #swagger.description = "사용자의 먹부림(음식 섭취) 기록을 등록하는 API입니다."
  
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['menu_name'],
          properties: {
            menu_name: { 
              type: 'string', 
              example: '짜장면',
              description: '섭취한 메뉴명'
            }
          }
        }
      }
    }
  }

  #swagger.responses[201] = {
    description: "먹부림 기록 등록 성공",
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
                id: { type: 'string', example: '1' },
                user_id: { type: 'string', example: '4' },
                menu_name: { type: 'string', example: '짜장면' },
                date: { type: 'string', example: '2025-07-28T12:30:00.000Z' }
              }
            }
          }
        }
      }
    }
  }

  #swagger.responses[400] = {
    description: "잘못된 요청 (필수 파라미터 누락 등)",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: '메뉴명이 필요합니다.' }
          }
        }
      }
    }
  }

  #swagger.responses[401] = {
    description: "인증되지 않은 사용자",
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

  #swagger.responses[500] = {
    description: "서버 오류",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: '서버 오류가 발생했습니다.' }
          }
        }
      }
    }
  }
  */

  
};