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
 * 내 프로필 조회 - GET /profile/{id}
 */
export const handleGetUserProfile = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "사용자 프로필 조회"
  #swagger.description = "사용자 ID만으로 전체 프로필 정보를 조회합니다."
  #swagger.parameters['id'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'string'
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
                body_type: { type: "string", example: "감기" },
                gender: { type: "string", example: "남성" },
                exercise: { type: "string", example: "다이어트 중" },
                prefer: { 
                  type: "array", 
                  items: { type: "string" },
                  example: ["한식", "양식"]
                },
                allergy: { 
                  type: "array", 
                  items: { type: "string" },
                  example: ["달걀(난류) 알레르기", "우유 알레르기"]
                },
                profileImageUrl: { type: "string", example: "https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/123.jpg" },
                created_at: { type: "string", example: "2023-01-01T00:00:00.000Z" },
                updated_at: { type: "string", example: "2023-01-01T00:00:00.000Z" }
              }
            }
          }
        }
      }
    }
  }
  */

  try {
    const { id: userId } = req.params;

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
 * 프로필 정보 수정 - PATCH /profile/{id}
 */
export const handleUpdateUserProfile = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "프로필 정보 수정"
  #swagger.description = "사용자 ID로 프로필 정보를 수정합니다."
  #swagger.parameters['id'] = {
    in: 'path',
    description: '사용자 ID',
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
            email: { type: 'string', example: 'user@example.com' },
            nickname: { type: 'string', example: '새닉네임' },
            body_type: { type: 'string', example: '감기', enum: ['감기', '소화불량', '더위잘탐', '추위잘탐'] },
            gender: { type: 'string', example: '남성', enum: ['남성', '여성'] },
            exercise: { type: 'string', example: '다이어트 중', enum: ['다이어트 중', '증량 중', '유지 중'] },
            prefer: { 
              type: 'array', 
              items: { type: 'string', enum: ['한식', '양식', '중식', '일식', '다른나라'] },
              example: ['한식', '양식']
            },
            allergy: { 
              type: 'array', 
              items: { type: 'string', enum: ['달걀(난류) 알레르기', '우유 알레르기', '갑각류 알레르기', '해산물 알레르기', '견과류 알레르기'] },
              example: ['달걀(난류) 알레르기']
            },
            profileImageUrl: { type: 'string', example: 'https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/123.jpg' }
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
                nickname: { type: "string", example: "새닉네임" },
                body_type: { type: "string", example: "감기" },
                gender: { type: "string", example: "남성" },
                exercise: { type: "string", example: "다이어트 중" },
                prefer: { 
                  type: "array", 
                  items: { type: "string" },
                  example: ["한식", "양식"]
                },
                allergy: { 
                  type: "array", 
                  items: { type: "string" },
                  example: ["달걀(난류) 알레르기"]
                },
                profileImageUrl: { type: "string", example: "https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/123.jpg" }
              }
            }
          }
        }
      }
    }
  }
  */

  try {
    const { id: userId } = req.params;
    
    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
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
 * 특정 맛집 정보 조회 - GET /restaurant/{id}
 */
export const handleGetRestaurantDetail = async (req, res, next) => {
  /*
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "맛집 상세 정보 조회"
  #swagger.description = "맛집 ID만으로 모든 상세 정보를 조회합니다."
  #swagger.parameters['id'] = {
    in: 'path',
    description: '맛집 ID',
    required: true,
    type: 'string'
  }
  */

  try {
    const { id: restaurantId } = req.params;
    
    const result = await getMyRestaurants(null, 1000, null);
    const restaurant = result.data.find(r => r.id === restaurantId);
    
    if (!restaurant) {
      return res.status(StatusCodes.NOT_FOUND).error({
        errorCode: "M001",
        reason: "맛집을 찾을 수 없습니다.",
        data: { restaurantId }
      });
    }

    const responseData = responseFromRestaurant(restaurant);
    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 사용자의 모든 등록 맛집 조회 - GET /restaurants/{userId}
 */
export const handleGetMyRestaurants = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "내가 등록한 모든 맛집 조회"
  #swagger.description = "사용자 ID만으로 등록한 모든 맛집을 조회합니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'string'
  }
  */

  try {
    const { userId } = req.params;
    
    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
        data: null
      });
    }

    const result = await getMyRestaurants(parseInt(userId), 1000, null);
    const responseData = responseFromRestaurantList(result.data, false, null);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 맛집 정보 수정 - PATCH /restaurant/{id}
 */
export const handleUpdateRestaurant = async (req, res, next) => {
  /*
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "맛집 정보 수정"
  #swagger.description = "맛집 ID로 정보를 수정합니다."
  #swagger.parameters['id'] = {
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
            userId: { type: 'integer', example: 1, description: '테스트용: 수정 권한 확인용 사용자 ID' },
            name: { type: 'string', example: '수정된 맛집 이름' },
            address: { type: 'string', example: '서울시 강남구 테헤란로' },
            repre_menu: { type: 'string', example: '대표메뉴' }
          }
        }
      }
    }
  }
  */

  try {
    const { id: restaurantId } = req.params;
    const { userId } = req.body;
    
    if (!restaurantId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "맛집 ID가 필요합니다.",
        data: null
      });
    }

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
 * 사용자의 모든 찜 목록 조회 - GET /hearts/{userId}
 */
export const handleGetZzimList = async (req, res, next) => {
  /*
  #swagger.tags = ["Heart"]
  #swagger.summary = "사용자의 모든 찜 목록 조회"
  #swagger.description = "사용자 ID만으로 모든 찜 목록을 조회합니다."
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'string'
  }
  */

  try {
    const { userId } = req.params;
    
    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
        data: null
      });
    }

    const result = await getZzimList(parseInt(userId), 1000, null);
    const responseData = responseFromZzimList(result.data, false, null);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 찜 등록 - POST /heart
 */
export const handleAddZzim = async (req, res, next) => {
  /*
  #swagger.tags = ["Heart"]
  #swagger.summary = "찜 등록"
  #swagger.description = "맛집을 찜 목록에 추가합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['userId', 'restaurantId'],
          properties: {
            userId: { type: 'integer', example: 1 },
            restaurantId: { type: 'integer', example: 1 }
          }
        }
      }
    }
  }
  */

  try {
    const { userId, restaurantId } = req.body;
    
    if (!userId || !restaurantId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID와 맛집 ID가 필요합니다.",
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
 * 찜 해제 - DELETE /heart
 */
export const handleRemoveZzim = async (req, res, next) => {
  /*
  #swagger.tags = ["Heart"]
  #swagger.summary = "찜 해제"
  #swagger.description = "찜 목록에서 맛집을 제거합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['userId', 'restaurantId'],
          properties: {
            userId: { type: 'integer', example: 1 },
            restaurantId: { type: 'integer', example: 1 }
          }
        }
      }
    }
  }
  */

  try {
    const { userId, restaurantId } = req.body;
    
    if (!userId || !restaurantId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID와 맛집 ID가 필요합니다.",
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