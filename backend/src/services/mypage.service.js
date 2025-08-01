import {
  findUserProfile,
  updateUserProfile,
  countUserRestaurants,
  findUserRestaurants,
  findRestaurantById,
  updateRestaurant,
  findZzim,
  createZzim,
  deleteZzim,
  countUserZzims,
  findUserZzims
} from '../repositories/mypage.repository.js';

import {
  NoProfileData,
  ProfileUpdateFailed,
  NoRestData,
  NoRestaurantPermission,
  AlreadyZzimmed,
  NoZzimData,
  InvalidProfileData
} from '../errors.js';

import { findUserReviews } from '../repositories/mypage.repository.js';

/**
 * 사용자 프로필 조회
 */
export const getUserProfile = async (userId) => {
  const user = await findUserProfile(userId);
  
  if (!user) {
    throw new NoProfileData("사용자 프로필을 찾을 수 없습니다.", { userId });
  }

  return user;
};

/**
 * 사용자 프로필 수정
 */
export const updateUserProfileService = async (userId, data) => {
  // 사용자 존재 확인
  const existingUser = await findUserProfile(userId);
  if (!existingUser) {
    throw new NoProfileData("사용자를 찾을 수 없습니다.", { userId });
  }

  // 업데이트할 데이터가 있는지 확인
  const updateFields = ['email', 'nickname', 'body_type', 'gender', 'exercise', 'prefer', 'allergy', 'profileImageUrl'];
  const hasUpdateData = updateFields.some(field => data[field] !== undefined);
  
  if (!hasUpdateData) {
    throw new InvalidProfileData("수정할 데이터가 없습니다.", data);
  }

  try {
    const updatedUser = await updateUserProfile(userId, data);
    return updatedUser;
  } catch (error) {
    throw new ProfileUpdateFailed("프로필 수정에 실패했습니다.", { userId, error: error.message });
  }
};

/**
 * 내가 등록한 맛집 목록 조회
 */
export const getMyRestaurants = async (userId, limit = 10, cursor = null) => {
  try {
    const result = await findUserRestaurants(userId, limit, cursor);
    return result;
  } catch (error) {
    console.error('맛집 목록 조회 상세 오류:', error);
    // 에러 발생시 빈 결과 반환
    return {
      data: [],
      hasNextPage: false,
      nextCursor: null
    };
  }
};

/**
 * 맛집 정보 수정
 */
export const updateRestaurantService = async (restaurantId, userId, data) => {
  // 업데이트할 데이터 필터링 (실제 존재하는 컬럼만)
  const updateFields = ['name', 'repre_menu', 'address'];
  
  const filteredData = {};
  updateFields.forEach(field => {
    if (data[field] !== undefined) {
      filteredData[field] = data[field];
    }
  });

  if (Object.keys(filteredData).length === 0) {
    throw new InvalidProfileData("수정할 데이터가 없습니다.", data);
  }

  try {
    const updatedRestaurant = await updateRestaurant(restaurantId, filteredData);
    return updatedRestaurant;
  } catch (error) {
    throw new Error("맛집 정보 수정에 실패했습니다.");
  }
};

/**
 * 찜 등록
 */
export const addZzimService = async (userId, restaurantId) => {
  // 사용자 존재 확인
  const user = await findUserProfile(userId);
  if (!user) {
    throw new NoProfileData("사용자를 찾을 수 없습니다.", { userId });
  }

  // 이미 찜했는지 확인
  const existingZzim = await findZzim(userId, restaurantId);
  if (existingZzim) {
    throw new AlreadyZzimmed("이미 찜한 맛집입니다.", { userId, restaurantId });
  }

  try {
    const newZzim = await createZzim(userId, restaurantId);
    return newZzim;
  } catch (error) {
    console.error('찜 등록 상세 오류:', error);
    throw new Error("찜 등록에 실패했습니다.");
  }
};

/**
 * 찜 해제
 */
export const removeZzimService = async (userId, restaurantId) => {
  // 찜 존재 확인
  const existingZzim = await findZzim(userId, restaurantId);
  if (!existingZzim) {
    throw new NoZzimData("찜한 맛집을 찾을 수 없습니다.", { userId, restaurantId });
  }

  try {
    await deleteZzim(existingZzim.id);
    return { success: true };
  } catch (error) {
    throw new Error("찜 해제에 실패했습니다.");
  }
};

/**
 * 찜 목록 조회
 */
export const getZzimList = async (userId, limit = 10, cursor = null) => {
  try {
    const result = await findUserZzims(userId, limit, cursor);
    return result;
  } catch (error) {
    console.error('찜 목록 조회 상세 오류:', error);
    // 에러 발생시 빈 결과 반환
    return {
      data: [],
      hasNextPage: false,
      nextCursor: null
    };
  }
};


/**
 * 사용자 작성 리뷰 목록 조회
 */
export const getUserReviews = async (userId, limit = 10, cursor = null) => {
  try {
    const result = await findUserReviews(parseInt(userId), limit, cursor);
    return result;
  } catch (error) {
    console.error('리뷰 목록 조회 상세 오류:', error);
    // 에러 발생시 빈 결과 반환
    return {
      data: [],
      hasNextPage: false,
      nextCursor: null
    };
  }
};