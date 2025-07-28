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
 *
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
                profileImageUrl: { type: "string", example: "https://s3.amazonaws.com/profile.jpg" },
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
    // 테스트용: 인증 체크 우회 (실제 서비스에서는 아래 주석 해제)
    // const sessionUserId = req.session.user?.id;
    // if (!sessionUserId) {
    //   return res.status(StatusCodes.UNAUTHORIZED).error({
    //     errorCode: "AUTH_REQUIRED",
    //     reason: "로그인이 필요합니다.",
    //     data: null
    //   });
    // }

    // path parameter에서 userId만 받기
    const { id: userId } = req.params;

    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
        data: null
      });
    }

    // 모든 프로필 정보를 한 번에 조회
    const userProfile = await getUserProfile(parseInt(userId));
    const responseData = responseFromProfile(userProfile);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 프로필 정보 수정 - PATCH /profile/{id}
 * 
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
            body_type: { type: 'integer', example: 1 },
            gender: { type: 'integer', example: 1 },
            exercise: { type: 'integer', example: 1 },
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
                nickname: { type: "string", example: "새닉네임" },
                profileImageUrl: { type: "string", example: "https://s3.amazonaws.com/profile.jpg" }
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: "잘못된 요청 (필수 값 누락, 잘못된 형식 등)",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "C006" },
                reason: { type: "string", example: "사용자 ID가 필요합니다." },
                data: { type: "object", example: null }
              }
            },
            success: { type: "object", example: null }
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
                reason: { type: "string", example: "로그인이 필요합니다." },
                data: { type: "object", example: null }
              }
            },
            success: { type: "object", example: null }
          }
        }
      }
    }
  }
  #swagger.responses[409] = {
    description: "이메일 중복",
    content: {
      'application/json': {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "M002" },
                reason: { type: "string", example: "이미 사용중인 이메일입니다." },
                data: { 
                  type: "object",
                  properties: {
                    email: { type: "string", example: "duplicate@example.com" }
                  }
                }
              }
            },
            success: { type: "object", example: null }
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
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "SERVER_ERROR" },
                reason: { type: "string", example: "서버 내부 오류가 발생했습니다." },
                data: { type: "object", example: null }
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
    // 테스트용: 인증 체크 우회 (실제 서비스에서는 아래 주석 해제)
    // const sessionUserId = req.session.user?.id;
    // const { id: userId } = req.params;
    // if (!sessionUserId || sessionUserId !== userId) {
    //   return res.status(StatusCodes.UNAUTHORIZED).error({
    //     errorCode: "AUTH_REQUIRED",
    //     reason: "본인만 수정할 수 있습니다.",
    //     data: null
    //   });
    // }

    // path parameter에서 userId 받기
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
 * 
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
    
    // 특정 맛집의 모든 정보를 조회
    const result = await getMyRestaurants(null, 1000, null); // 전체에서 찾기
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
 *
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
    // 인증 체크 우회
    // const sessionUserId = req.session.user?.id;
    // const { userId } = req.params;
    // if (!sessionUserId || sessionUserId !== userId) {
    //   return res.status(StatusCodes.UNAUTHORIZED).error({
    //     errorCode: "AUTH_REQUIRED",
    //     reason: "본인의 맛집만 조회할 수 있습니다.",
    //     data: null
    //   });
    // }

    const { userId } = req.params;
    
    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
        data: null
      });
    }

    // 🚀 해당 사용자의 모든 맛집을 조회 (페이지네이션 없이 전체)
    const result = await getMyRestaurants(parseInt(userId), 1000, null);
    const responseData = responseFromRestaurantList(result.data, false, null);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 맛집 정보 수정 - PATCH /restaurant/{id}
 *
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
    // 🔥 테스트용: 인증 체크 우회
    // const sessionUserId = req.session.user?.id;
    // if (!sessionUserId) {
    //   return res.status(StatusCodes.UNAUTHORIZED).error({
    //     errorCode: "AUTH_REQUIRED",
    //     reason: "로그인이 필요합니다.",
    //     data: null
    //   });
    // }

    const { id: restaurantId } = req.params;
    const { userId } = req.body; // 테스트용으로만 사용
    
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
 * 🎯 프론트엔드 친화적: 사용자 ID만으로 모든 찜 목록 반환
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
    // 🔥 테스트용: 인증 체크 우회
    // const sessionUserId = req.session.user?.id;
    // const { userId } = req.params;
    // if (!sessionUserId || sessionUserId !== userId) {
    //   return res.status(StatusCodes.UNAUTHORIZED).error({
    //     errorCode: "AUTH_REQUIRED",
    //     reason: "본인의 찜 목록만 조회할 수 있습니다.",
    //     data: null
    //   });
    // }

    const { userId } = req.params;
    
    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).error({
        errorCode: "C006",
        reason: "사용자 ID가 필요합니다.",
        data: null
      });
    }

    //  해당 사용자의 모든 찜 목록을 조회 (페이지네이션 없이 전체)
    const result = await getZzimList(parseInt(userId), 1000, null);
    const responseData = responseFromZzimList(result.data, false, null);

    res.status(StatusCodes.OK).success(responseData);

  } catch (error) {
    next(error);
  }
};

/**
 * 찜 등록 - POST /heart
 * 
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
    // 인증 체크 우회
    // const sessionUserId = req.session.user?.id;
    // const { userId } = req.body;
    // if (!sessionUserId || sessionUserId !== userId) {
    //   return res.status(StatusCodes.UNAUTHORIZED).error({
    //     errorCode: "AUTH_REQUIRED",
    //     reason: "본인만 찜할 수 있습니다.",
    //     data: null
    //   });
    // }

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
 *  
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
    // 테스트용: 인증 체크 우회
    // const sessionUserId = req.session.user?.id;
    // const { userId } = req.body;
    // if (!sessionUserId || sessionUserId !== userId) {
    //   return res.status(StatusCodes.UNAUTHORIZED).error({
    //     errorCode: "AUTH_REQUIRED",
    //     reason: "본인만 찜 해제할 수 있습니다.",
    //     data: null
    //   });
    // }

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