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
 * GET /profile/me
 */
export const handleGetUserProfile = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "내 프로필 조회"
  #swagger.description = "세션 기반으로 현재 로그인한 사용자의 프로필 정보를 조회합니다."
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
                email: { type: "string", example: "test@example.com" },
                nickname: { type: "string", example: "테스트유저" },
                body_type: { type: "string", example: "더위잘탐" },
                gender: { type: "string", example: "남성" },
                exercise: { type: "string", example: "다이어트 중" },
                profileImageUrl: { type: "string", example: "https://s3.amazonaws.com/profile.jpg" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[401] = {
    description: "인증 필요",
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
                reason: { type: "string", example: "로그인이 필요합니다." }
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

    const userProfile = await getUserProfile(parseInt(userId));
    const responseData = responseFromProfile(userProfile);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 프로필 정보 수정
 * PATCH /profile/edit
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
            nickname: { type: 'string', example: '테스트유저' },
            email: { type: 'string', example: 'test@example.com' },
            phone_num: { type: 'string', example: '010-1234-5678' },
            body_type: { type: 'string', enum: ['감기', '소화불량', '더위잘탐', '추위잘탐'], example: '더위잘탐' },
            gender: { type: 'string', enum: ['남성', '여성'], example: '남성' },
            exercise: { type: 'string', enum: ['다이어트 중', '중량 중', '유지 중'], example: '다이어트 중' },
            prefer: { type: 'string', example: '한식, 중식' },
            allergic: { type: 'string', example: '견과류, 갑각류' },
            profileImageUrl: { type: 'string', example: 'https://s3.amazonaws.com/profile.jpg' }
          }
        },
        examples: {
          basic_update: {
            summary: '기본 정보만 수정',
            value: {
              nickname: '새닉네임',
              email: 'new@example.com'
            }
          },
          full_update: {
            summary: '전체 정보 수정',
            value: {
              nickname: '테스트유저',
              email: 'test@example.com',
              phone_num: '010-1234-5678',
              body_type: '더위잘탐',
              gender: '남성',
              exercise: '다이어트 중',
              prefer: '한식, 중식',
              allergic: '견과류',
              profileImageUrl: 'https://s3.amazonaws.com/profile.jpg'
            }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "프로필 수정 성공"
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
 * 내가 등록한 맛집 가져오기
 * GET /place/:id
 */
export const handleGetMyRestaurants = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "내가 등록한 맛집 가져오기"
  #swagger.description = "사용자 ID로 해당 사용자가 등록한 맛집 목록을 조회합니다."
  #swagger.parameters = [
    {
      name: 'id',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      description: '사용자 ID',
      example: '1'
    },
    {
      name: 'limit',
      in: 'query',
      schema: { type: 'integer', default: 10 },
      description: '조회할 개수',
      example: 10
    },
    {
      name: 'cursor',
      in: 'query',
      schema: { type: 'string' },
      description: '페이징 커서',
      example: 'abc123'
    }
  ]
  #swagger.responses[200] = {
    description: "맛집 목록 조회 성공"
  }
  */

  try {
    const { id: userId } = req.params;
    
    // 세션 사용자와 요청 사용자 일치 확인
    const sessionUserId = req.session.user?.id;
    if (!sessionUserId || sessionUserId.toString() !== userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "본인의 정보만 조회할 수 있습니다.",
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
 * 특정 맛집 정보 수정하기
 * PATCH /place/:id/edit
 */
export const handleUpdateRestaurant = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "특정 맛집 정보 수정하기"
  #swagger.description = "등록한 맛집의 정보를 수정합니다."
  #swagger.parameters = [
    {
      name: 'id',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      description: '맛집 ID',
      example: '1'
    }
  ]
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: { type: 'string', example: '맛있는 테스트 김치찌개집' },
            repre_menu: { type: 'string', example: '김치찌개, 된장찌개' },
            address: { type: 'string', example: '서울시 강남구 테헤란로 123' },
            location1: { type: 'string', example: '서울시' },
            location2: { type: 'string', example: '강남구' },
            location3: { type: 'string', example: '역삼동' },
            detail_address: { type: 'string', example: '1층 101호' },
            close_day: { type: 'string', example: '월요일' },
            start_time: { type: 'string', example: '11:00' },
            end_time: { type: 'string', example: '22:00' }
          }
        },
        examples: {
          basic_update: {
            summary: '기본 정보만 수정',
            value: {
              name: '새로운 맛집 이름',
              repre_menu: '김치찌개'
            }
          },
          full_update: {
            summary: '전체 정보 수정',
            value: {
              name: '맛있는 테스트 김치찌개집',
              repre_menu: '김치찌개, 된장찌개',
              address: '서울시 강남구 테헤란로 123',
              location1: '서울시',
              location2: '강남구',
              location3: '역삼동',
              detail_address: '1층 101호',
              close_day: '월요일',
              start_time: '11:00',
              end_time: '22:00'
            }
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "맛집 정보 수정 성공"
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

    const { id: restaurantId } = req.params;
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
 * 찜 등록하기
 * POST /heart
 */
export const handleAddZzim = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "찜 등록하기"
  #swagger.description = "맛집을 찜 목록에 추가합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['restaurantId'],
          properties: {
            restaurantId: { type: 'integer', description: '찜할 맛집 ID', example: 1 }
          }
        },
        examples: {
          add_zzim: {
            summary: '찜 등록 예시',
            value: {
              restaurantId: 1
            }
          }
        }
      }
    }
  }
  #swagger.responses[201] = {
    description: "찜 등록 성공"
  }
  #swagger.responses[400] = {
    description: "이미 찜한 맛집이거나 잘못된 요청"
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
 * 찜 상태 변경하기 (찜 해제)
 * PATCH /heart
 */
export const handleRemoveZzim = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "찜 상태 변경하기"
  #swagger.description = "찜 목록에서 맛집을 제거합니다."
  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['restaurantId'],
          properties: {
            restaurantId: { type: 'integer', description: '찜 해제할 맛집 ID', example: 1 }
          }
        },
        examples: {
          remove_zzim: {
            summary: '찜 해제 예시',
            value: {
              restaurantId: 1
            }
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
 * 찜 목록 가져오기
 * GET /heart/:id
 */
export const handleGetZzimList = async (req, res, next) => {
  /*
  #swagger.tags = ["MyPage"]
  #swagger.summary = "찜 목록 가져오기"
  #swagger.description = "사용자 ID로 해당 사용자의 찜 목록을 조회합니다."
  #swagger.parameters = [
    {
      name: 'id',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      description: '사용자 ID',
      example: '1'
    },
    {
      name: 'limit',
      in: 'query',
      schema: { type: 'integer', default: 10 },
      description: '조회할 개수',
      example: 10
    },
    {
      name: 'cursor',
      in: 'query',
      schema: { type: 'string' },
      description: '페이징 커서',
      example: 'abc123'
    }
  ]
  #swagger.responses[200] = {
    description: "찜 목록 조회 성공"
  }
  */

  try {
    const { id: userId } = req.params;
    
    // 세션 사용자와 요청 사용자 일치 확인
    const sessionUserId = req.session.user?.id;
    if (!sessionUserId || sessionUserId.toString() !== userId) {
      return res.status(StatusCodes.UNAUTHORIZED).error({
        errorCode: "AUTH_REQUIRED",
        reason: "본인의 정보만 조회할 수 있습니다.",
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