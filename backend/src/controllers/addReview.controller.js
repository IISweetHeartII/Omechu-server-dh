import { addReview } from "../services/addReview.service.js";
import { bodyToAddReview } from "../dtos/addReview.dto.js";
import { StatusCodes } from "http-status-codes";
export const handleAddReview = async (req, res, next) => {
  const review = await addReview(
    bodyToAddReview({
      data: req.body,
      storeId: req.params.id,
      userId: req.session.user.id,
    })
  );
  console.log(review);
  res.status(StatusCodes.OK).success({
    id: review.id.toString(),
    userId: review.user_id.toString(),
    restId: review.rest_id.toString(),
    rating: review.rating.toString(),
    tag: review.tag,
    text: review.text,
  });
  /*
#swagger.tags = ["Restaurant"]
#swagger.summary = "리뷰 작성 API"
#swagger.description = "리뷰 작성을 위한 API입니다. userId는 path variable로 전달하세요."

#swagger.requestBody = {
  required: true,
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          rating: { type: 'number', example: 5 },
          tag: {
            type: 'array',
            items: { type: 'string' },
            example: ["아침식사", "데이트"]
          },
          imageUrl: {
            type: 'array',
            items: { type: 'string' },
            example: [
              "https://s3.amazonaws.com/img1.jpg",
              "https://s3.amazonaws.com/img2.jpg"
            ]
          },
          reviewText: { type: 'string', example: '맛있어요' }
        }
      }
    }
  }
}

#swagger.responses[200] = {
  description: "리뷰 등록 성공",
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
              userId: { type: 'number', example: 4 },
              restId: { type: 'number', example: 1 },
              rating: { type: 'number', example: 5 },
              tag: {
                type: 'array',
                items: { type: 'string' },
                example: ["아침식사", "데이트"]
              },
              imageUrl: {
                type: 'array',
                items: { type: 'string' },
                example: [
                  "https://s3.amazonaws.com/img1.jpg",
                  "https://s3.amazonaws.com/img2.jpg"
                ]
              },
              text: { type: 'string', example: '맛있습니다' }
            }
          }
        }
      }
    }
  }
}

#swagger.responses[400] = {
  description: "imageUrl을 입력하지 않았을 때",
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
              reason: { type: 'string', example: '이미지 URL이 없습니다' },
              data: {
                type: 'object',
                properties: {
                  userId: { type: 'number', example: 4 },
                  restId: { type: 'number', example: 1 },
                  rating: { type: 'number', example: 5 },
                  tag: {
                    type: 'array',
                    items: { type: 'string' },
                    example: ["아침식사", "데이트"]
                  },
                  text: { type: 'string', example: '맛있습니다' }
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
  description: "해당 식당 정보가 없을 때",
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
              reason: { type: 'string', example: '해당 식당 정보가 없습니다' },
              data: {
                type: 'object',
                properties: {
                  userId: { type: 'number', example: 4 },
                  restId: { type: 'number', example: 1 },
                  rating: { type: 'number', example: 5 },
                  tag: {
                    type: 'array',
                    items: { type: 'string' },
                    example: ["아침식사", "데이트"]
                  },
                  imageUrl: {
                    type: 'array',
                    items: { type: 'string' },
                    example: [
                      "https://s3.amazonaws.com/img1.jpg",
                      "https://s3.amazonaws.com/img2.jpg"
                    ]
                  },
                  text: { type: 'string', example: '맛있습니다' }
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
  description: "서버 오류",
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
              reason: { type: 'string', example: '예상치 못한 서버 오류' },
              data: {
                type: 'object',
                properties: {
                  userId: { type: 'number', example: 4 },
                  restId: { type: 'number', example: 1 },
                  rating: { type: 'number', example: 5 },
                  tag: {
                    type: 'array',
                    items: { type: 'string' },
                    example: ["아침식사", "데이트"]
                  },
                  imageUrl: {
                    type: 'array',
                    items: { type: 'string' },
                    example: [
                      "https://s3.amazonaws.com/img1.jpg",
                      "https://s3.amazonaws.com/img2.jpg"
                    ]
                  },
                  text: { type: 'string', example: '맛있습니다' }
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
