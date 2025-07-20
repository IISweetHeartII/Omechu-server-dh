import { StatusCodes } from "http-status-codes";
import {
  getUserProfile,
  updateUserProfileService,
  getMyRestaurants,
  updateRestaurantService,
  addZzimService,
  removeZzimService,
  getZzimList
} from '../services/mypage.service.js';

import {
  bodyToProfileUpdate,
  responseFromProfile,
  bodyToRestaurantUpdate,
  responseFromRestaurant,
  bodyToZzimRequest,
  responseFromZzim,
  responseFromZzimList,
  responseFromRestaurantList
} from '../dtos/mypage.dto.js';

/**
 * 내 프로필 조회
 */
export const handleGetUserProfile = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "내 프로필 조회"
  #swagger.description = "사용자의 프로필 정보를 조회합니다."
  #swagger.parameters['userId'] = {
    in: 'query',
    description: '사용자 ID',
    required: true,
    type: 'integer'
  }
  #swagger.responses[200] = {
    description: "프로필 조회 성공",
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
                id: { type: "string", example: "1" },
                email: { type: "string", example: "user@example.com" },
                nickname: { type: "string", example: "오메추유저" },
                body_type: { type: "string", example: "보통" },
                gender: { type: "string", example: "남성" },
                exercise: { type: "string", example: "다이어트 중" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "사용자 ID가 없거나 잘못된 경우",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "M001" },
                reason: { type: "string", example: "사용자 프로필을 찾을 수 없습니다." },
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
    const { userId } = req.query;

    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
        data: null
      });
    }

    const userProfile = await getUserProfile(parseInt(userId));
    const responseData = responseFromProfile(userProfile);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 프로필 정보 수정
 */
export const handleUpdateUserProfile = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "프로필 정보 수정"
  #swagger.description = "사용자의 프로필 정보를 수정합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            email: { type: 'string', example: 'user@example.com' },
            phone_num: { type: 'string', example: '010-1234-5678' },
            nickname: { type: 'string', example: '새닉네임' },
            body_type: { type: 'string', enum: ['감기', '소화불량', '더위잘탐', '추위잘탐'] },
            gender: { type: 'string', enum: ['남성', '여성'] },
            exercise: { type: 'string', enum: ['다이어트 중', '중량 중', '유지 중'] },
            profileImageUrl: { type: 'string', example: 'https://s3.amazonaws.com/profile.jpg' }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "프로필 수정 성공",
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
                id: { type: "string", example: "1" },
                email: { type: "string", example: "user@example.com" },
                nickname: { type: "string", example: "새닉네임" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[401] = {
    description: "로그인이 필요한 경우",
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
                reason: { type: "string", example: "로그인이 필요합니다" }
              }
            }
          }
        }
      }
    }
  }
  */

  try {
    const userId = req.session.user?.id;
    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "로그인이 필요합니다.",
        data: null
      });
    }

    const profileData = bodyToProfileUpdate(req.body, userId);
    const updatedProfile = await updateUserProfileService(parseInt(userId), profileData);
    const responseData = responseFromProfile(updatedProfile);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 내가 등록한 맛집 목록 조회
 */
export const handleGetMyRestaurants = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "내가 등록한 맛집 목록 조회"
  #swagger.description = "사용자가 등록한 맛집 목록을 조회합니다."
  #swagger.parameters['limit'] = {
    in: 'query',
    description: '한 번에 가져올 데이터 개수',
    required: false,
    type: 'integer',
    default: 10
  }
  #swagger.parameters['cursor'] = {
    in: 'query',
    description: '마지막으로 받은 맛집 ID (페이지네이션용)',
    required: false,
    type: 'string'
  }
  #swagger.responses[200] = {
    description: "맛집 목록 조회 성공",
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
                data: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "1" },
                      name: { type: "string", example: "맛있는집" },
                      address: { type: "string", example: "서울시 강남구" }
                    }
                  }
                },
                hasNextPage: { type: "boolean", example: true },
                nextCursor: { type: "string", example: "10" }
              }
            }
          }
        }
      }
    }
  }
  */

  try {
    const userId = req.session.user?.id;
    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "로그인이 필요합니다.",
        data: null
      });
    }

    const { limit = 10, cursor } = req.query;
    const result = await getMyRestaurants(parseInt(userId), parseInt(limit), cursor);
    const responseData = responseFromRestaurantList(result.data, result.hasNextPage, result.nextCursor);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 특정 맛집 정보 수정
 */
export const handleUpdateRestaurant = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "맛집 정보 수정"
  #swagger.description = "등록한 맛집의 정보를 수정합니다."
  #swagger.parameters['restaurantId'] = {
    in: 'path',
    description: '맛집 ID',
    required: true,
    type: 'string'
  }
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: { type: 'string', example: '수정된 맛집 이름' },
            address: { type: 'string', example: '서울시 강남구 테헤란로' },
            repre_menu: { type: 'string', example: '대표메뉴' },
            start_time: { type: 'string', example: '0900' },
            end_time: { type: 'string', example: '2200' }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "맛집 정보 수정 성공"
  }
  #swagger.responses[403] = {
    description: "수정 권한 없음",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "M003" },
                reason: { type: "string", example: "맛집 정보를 수정할 권한이 없습니다." }
              }
            }
          }
        }
      }
    }
  }
  */

  try {
    const userId = req.session.user?.id;
    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "로그인이 필요합니다.",
        data: null
      });
    }

    const { restaurantId } = req.params;
    const restaurantData = bodyToRestaurantUpdate(req.body, restaurantId, userId);
    
    const updatedRestaurant = await updateRestaurantService(
      parseInt(restaurantId), 
      parseInt(userId), 
      restaurantData
    );
    
    const responseData = responseFromRestaurant(updatedRestaurant);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 찜 등록
 */
export const handleAddZzim = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "찜 등록"
  #swagger.description = "맛집을 찜 목록에 추가합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['restaurantId'],
          properties: {
            restaurantId: { type: 'integer', example: 1 }
          }
        }
      }
    }
  }
  #swagger.responses[201] = {
    description: "찜 등록 성공",
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
                id: { type: "string", example: "1" },
                userId: { type: "string", example: "1" },
                restaurantId: { type: "string", example: "1" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[409] = {
    description: "이미 찜한 맛집인 경우",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "M004" },
                reason: { type: "string", example: "이미 찜한 맛집입니다." }
              }
            }
          }
        }
      }
    }
  }
  */

  try {
    const userId = req.session.user?.id;
    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "로그인이 필요합니다.",
        data: null
      });
    }

    const { restaurantId } = req.body;
    if (!restaurantId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "맛집 ID가 필요합니다.",
        data: null
      });
    }

    const newZzim = await addZzimService(parseInt(userId), parseInt(restaurantId));
    const responseData = responseFromZzim(newZzim);

    res.status(StatusCodes.CREATED).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 찜 해제
 */
export const handleRemoveZzim = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "찜 해제"
  #swagger.description = "찜 목록에서 맛집을 제거합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['restaurantId'],
          properties: {
            restaurantId: { type: 'integer', example: 1 }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "찜 해제 성공"
  }
  #swagger.responses[404] = {
    description: "찜한 맛집을 찾을 수 없는 경우"
  }
  */

  try {
    const userId = req.session.user?.id;
    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "로그인이 필요합니다.",
        data: null
      });
    }

    const { restaurantId } = req.body;
    if (!restaurantId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "맛집 ID가 필요합니다.",
        data: null
      });
    }

    await removeZzimService(parseInt(userId), parseInt(restaurantId));

    res.status(StatusCodes.OK).success({
      message: "찜이 성공적으로 해제되었습니다."
    });

  } catch (error) {
    next(error);
  }
};

/**
 * 찜 목록 조회
 */
export const handleGetZzimList = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "찜 목록 조회"
  #swagger.description = "사용자의 찜 목록을 조회합니다."
  #swagger.parameters['limit'] = {
    in: 'query',
    description: '한 번에 가져올 데이터 개수',
    required: false,
    type: 'integer',
    default: 10
  }
  #swagger.parameters['cursor'] = {
    in: 'query',
    description: '마지막으로 받은 찜 ID (페이지네이션용)',
    required: false,
    type: 'string'
  }
  #swagger.responses[200] = {
    description: "찜 목록 조회 성공",
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
                data: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "1" },
                      restaurantId: { type: "string", example: "1" },
                      restaurant: {
                        type: "object",
                        properties: {
                          name: { type: "string", example: "맛있는집" }
                        }
                      }
                    }
                  }
                },
                hasNextPage: { type: "boolean", example: true },
                nextCursor: { type: "string", example: "10" }
              }
            }
          }
        }
      }
    }
  }
  */

  try {
    const userId = req.session.user?.id;
    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "로그인이 필요합니다.",
        data: null
      });
    }

    const { limit = 10, cursor } = req.query;
    const result = await getZzimList(parseInt(userId), parseInt(limit), cursor);
    const responseData = responseFromZzimList(result.data, result.hasNextPage, result.nextCursor);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};