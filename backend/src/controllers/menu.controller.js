import { StatusCodes } from "http-status-codes";
import { bodyToChoice } from "../dtos/choice.dto.js";
import { getUserIdBySession } from "../repositories/user.repository.js";
import { recommendMenuService, findRelatedMenuService } from "../services/menu.service.js";
export const handleRecommendMenu = async (req, res) => {

    
    const choice = bodyToChoice(req.body);
    const userId = await getUserIdBySession(req.body.session);
    console.log("User ID:", userId);
    const newRecommendation = await recommendMenuService(choice, userId);
    if (newRecommendation) {
        res.status(StatusCodes.OK).json(newRecommendation);
    } else {
        res.status(StatusCodes.NOT_FOUND).json({ message: "No recommendation found" });
    }
    /*
    #swagger.tags = ["Menu"]
    #swagger.summary = "메뉴 추천 API"
    #swagger.description = "사용자의 선택 조건에 따라 메뉴를 추천하는 API입니다."

    #swagger.requestBody = {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['meal_time', 'purpose', 'mood', 'with', 'budget', 'weather', 'session'],
            properties: {
              meal_time: { 
                type: 'integer', 
                example: 1,
                description: "식사 시간 (1: 아침, 2: 점심, 3: 저녁, 4: 야식)"
              },
              purpose: { 
                type: 'integer', 
                example: 1,
                description: "목적 (1: 든든한 한끼, 2: 술 안주, 3: 간식, 4: 기념일)"
              },
              mood: { 
                type: 'integer', 
                example: 1,
                description: "기분"
              },
              with: { 
                type: 'integer', 
                example: 1,
                description: "동행자 (1: 혼자, 2: 친구, 3: 연인, 4: 가족)"
              },
              budget: { 
                type: 'integer', 
                example: 1,
                description: "예산 범위"
              },
              exceptions: {
                type: 'array',
                items: { type: 'string' },
                example: ["면", "중식"],
                description: "제외할 음식 종류"
              },
              weather: { 
                type: 'string', 
                example: "더움",
                description: "현재 날씨"
              },
              session: { 
                type: 'string', 
                example: "HXEKhjr9mS7CuUT6AM9RsY4d_2C9Kuwx",
                description: "사용자 세션 ID"
              }
            }
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "메뉴 추천 성공",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              menus: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    menu: { type: 'string', example: '짜장면' },
                    description: { type: 'string', example: '간장 소스로 볶은 중화풍 면 요리' },
                    calories: { type: 'number', example: 800 },
                    carbohydrates: { type: 'number', example: 90 },
                    protein: { type: 'number', example: 20 },
                    fat: { type: 'number', example: 30 },
                    sodium: { type: 'number', example: 1200 },
                    vitamins: {
                      type: 'array',
                      items: { type: 'string' },
                      example: ['A', 'B1', 'B2', 'C']
                    },
                    allergies: {
                      type: 'array',
                      items: { type: 'string' },
                      example: ['밀', '대두']
                    },
                    image_link: { 
                      type: 'string', 
                      example: 'https://example.com/image.jpg' 
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    #swagger.responses[404] = {
      description: "추천 메뉴를 찾을 수 없음",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string', example: 'No recommendation found' }
            }
          }
        }
      }
    }

    #swagger.responses[401] = {
      description: "인증 실패 - 유효하지 않은 세션",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string', example: 'Invalid session' }
            }
          }
        }
      }
    }

    #swagger.responses[500] = {
      description: "서버 내부 오류",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string', example: 'Internal server error' }
            }
          }
        }
      }
    }
    */

}








export const handleFindRelatedMenu = async (req, res) => {

     const { menuName } = req.body;

    try {
        const relatedMenus = await findRelatedMenuService(menuName);
        if (relatedMenus && relatedMenus.length > 0) {
            res.status(StatusCodes.OK).json(relatedMenus);
        } else {
            res.status(StatusCodes.NOT_FOUND).json({ message: "No related menus found" });
        }
    } catch (error) {
        console.error("Error finding related menus:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
    }
    /*
    #swagger.tags = ["Menu"]
    #swagger.summary = "관련 메뉴 찾기 API"
    #swagger.description = "입력된 메뉴명과 관련된 메뉴들을 찾는 API입니다."

    #swagger.requestBody = {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['menuName'],
            properties: {
              menuName: { 
                type: 'string', 
                example: "짜장면",
                description: "관련 메뉴를 찾을 기준 메뉴명"
              }
            }
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "관련 메뉴 찾기 성공",
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number', example: 1 },
                name: { type: 'string', example: '짬뽕' },
                description: { type: 'string', example: '매콤한 해물 국물 면 요리' },
                calories: { type: 'number', example: 900 },
                carbohydrates: { type: 'number', example: 85 },
                protein: { type: 'number', example: 25 },
                fat: { type: 'number', example: 35 },
                sodium: { type: 'number', example: 1500 },
                vitamins: {
                  type: 'array',
                  items: { type: 'string' },
                  example: ['A', 'C']
                },
                allergies: {
                  type: 'array',
                  items: { type: 'string' },
                  example: ['밀', '해산물']
                }
              }
            }
          }
        }
      }
    }

    #swagger.responses[404] = {
      description: "관련 메뉴를 찾을 수 없음",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string', example: 'No related menus found' }
            }
          }
        }
      }
    }

    #swagger.responses[500] = {
      description: "서버 내부 오류",
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string', example: 'Internal server error' }
            }
          }
        }
      }
    }
    */

   
}