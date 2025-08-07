import { StatusCodes } from "http-status-codes";
import {
  getMukburimStatisticsService,
  getMukburimCalendarService,
  getMukburimByDateService,
} from "../services/mukburim.statistics.service.js";

/**
 * 먹부림 통계 조회 컨트롤러
 */
export const handleGetMukburimStatistics = async (req, res, next) => {
  /*
  #swagger.tags = ["Mukburim"]
  #swagger.summary = "먹부림 통계 조회 API"
  #swagger.description = "사용자의 먹부림 기록을 기간별로 통계 조회하는 API입니다. 기본적으로 현재 시점 기준으로 조회합니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'string'
  }
  #swagger.parameters['period'] = {
    in: 'query',
    description: '조회 기간',
    required: false,
    type: 'string',
    enum: ['전체', '1주', '1개월', '3개월', '6개월', '1년'],
    example: '1개월'
  }
  #swagger.parameters['startDate'] = {
    in: 'query',
    description: '시작 날짜 (YYYY-MM-DD, period 대신 커스텀 범위 사용시)',
    required: false,
    type: 'string',
    example: '2025-06-01'
  }
  #swagger.parameters['endDate'] = {
    in: 'query',
    description: '종료 날짜 (YYYY-MM-DD, period 대신 커스텀 범위 사용시)',
    required: false,
    type: 'string',
    example: '2025-06-05'
  }
  #swagger.responses[200] = {
    description: "먹부림 통계 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: {
              type: "object",
              properties: {
                period: { type: "string", example: "1개월" },
                dateRange: {
                  type: "object",
                  properties: {
                    startDate: { type: "string", example: "2025-05-05" },
                    endDate: { type: "string", example: "2025-06-05" },
                    displayRange: { type: "string", example: "2025. 5. 5. ~ 2025. 6. 5." }
                  }
                },
                summary: {
                  type: "object",
                  properties: {
                    totalRecords: { type: "integer", example: 25 },
                    uniqueMenus: { type: "integer", example: 8 },
                    averagePerDay: { type: "number", example: 0.8 }
                  }
                },
                menuStatistics: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      menu_name: { type: "string", example: "짜장면" },
                      count: { type: "integer", example: 5 }
                    }
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
    description: "잘못된 요청 (파라미터 오류, 날짜 형식 오류 등)",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "MK002" },
                reason: { type: "string", example: "지원하지 않는 기간입니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[404] = {
    description: "해당 기간에 먹부림 데이터 없음",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "MK001" },
                reason: { type: "string", example: "해당 기간에 먹부림 기록이 없습니다." },
                data: { type: "object" }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  */

  try {
    const { userId } = req.params;
    const { period = "1개월", startDate, endDate } = req.query;

    const result = await getMukburimStatisticsService(
      parseInt(userId),
      period,
      startDate,
      endDate
    );

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};

/**
 * 먹부림 캘린더 조회 컨트롤러
 */
export const handleGetMukburimCalendar = async (req, res, next) => {
  /*
  #swagger.tags = ["Mukburim"]
  #swagger.summary = "먹부림 캘린더 조회 API"
  #swagger.description = "사용자의 월별 먹부림 기록을 캘린더 형태로 조회하는 API입니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'string'
  }
  #swagger.parameters['year'] = {
    in: 'query',
    description: '년도',
    required: true,
    type: 'integer',
    example: 2025
  }
  #swagger.parameters['month'] = {
    in: 'query',
    description: '월',
    required: true,
    type: 'integer',
    example: 8
  }
  #swagger.responses[200] = {
    description: "먹부림 캘린더 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: {
              type: "object",
              properties: {
                year: { type: "integer", example: 2025 },
                month: { type: "integer", example: 8 },
                totalRecords: { type: "integer", example: 15 },
                calendar: {
                  type: "object",
                  example: {
                    "2025-08-01": [
                      { id: "1", menu_name: "짜장면", time: "12:30" }
                    ]
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

  try {
    const { userId } = req.params;
    const { year, month } = req.query;

    const result = await getMukburimCalendarService(
      parseInt(userId),
      parseInt(year),
      parseInt(month)
    );

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};

/**
 * 특정 날짜 먹부림 조회 컨트롤러
 */
export const handleGetMukburimByDate = async (req, res, next) => {
  /*
  #swagger.tags = ["Mukburim"]
  #swagger.summary = "특정 날짜 먹부림 조회 API"
  #swagger.description = "특정 날짜의 먹부림 기록을 상세 조회하는 API입니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'string'
  }
  #swagger.parameters['date'] = {
    in: 'query',
    description: '조회할 날짜 (YYYY-MM-DD)',
    required: true,
    type: 'string',
    example: '2025-08-01'
  }
  #swagger.responses[200] = {
    description: "특정 날짜 먹부림 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", example: null },
            success: {
              type: "object",
              properties: {
                date: { type: "string", example: "2025-08-01" },
                totalRecords: { type: "integer", example: 3 },
                records: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "1" },
                      menu_name: { type: "string", example: "짜장면" },
                      time: { type: "string", example: "12:30" },
                      created_at: { type: "string", example: "2025-08-01T12:30:00.000Z" }
                    }
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

  try {
    const { userId } = req.params;
    const { date } = req.query;

    const result = await getMukburimByDateService(parseInt(userId), date);

    res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};
