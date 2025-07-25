import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

/**
 * 사용자 프로필 조회 
 */
export const findUserProfile = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: BigInt(userId) },
      select: {
        id: true,
        email: true,
        // phone_num: true,  
        nickname: true,
        body_type: true,
        gender: true,
        exercise: true,
        profileImageUrl: true,
        created_at: true,
        updated_at: true
      }
    });

    if (!user) return null;

    // BigInt 변환
    return {
      ...user,
      id: user.id.toString()
    };

  } catch (error) {
    console.error('사용자 프로필 조회 오류:', error);
    throw error;
  }
};

/**
 * 사용자 프로필 업데이트 (실제 DB 구조에 맞게 수정)
 */
export const updateUserProfile = async (userId, data) => {
  try {
    // 실제 DB 필드에 맞게 수정
    const updateData = {
      email: data.email,
      // phone_num: data.phone_num, 
      nickname: data.nickname,
      profileImageUrl: data.profileImageUrl,
      updated_at: new Date()
    };

    // undefined 값 제거
    Object.keys(updateData).forEach(key => {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    });

    const updatedUser = await prisma.user.update({
      where: { id: BigInt(userId) },
      data: updateData
    });

    return {
      ...updatedUser,
      id: updatedUser.id.toString()
    };

  } catch (error) {
    console.error('사용자 프로필 업데이트 오류:', error);
    throw error;
  }
};

/**
 * 맛집 정보 조회 (실제 DB 구조에 맞게 단순화)
 */
export const findRestaurantById = async (restaurantId) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { id: BigInt(restaurantId) }
      // include 제거 - 실제 DB 구조가 다름
    });

    if (!restaurant) return null;

    return {
      ...restaurant,
      id: restaurant.id.toString()
    };

  } catch (error) {
    console.error('맛집 조회 오류:', error);
    throw error;
  }
};

/**
 * 사용자가 등록한 맛집 개수 조회
 */
export const countUserRestaurants = async (userId) => {
  try {
    // 전체 맛집 개수 반환 (등록자 필드가 없으므로)
    const count = await prisma.restaurant.count();
    return count;

  } catch (error) {
    console.error('사용자 맛집 개수 조회 오류:', error);
    throw error;
  }
};

/**
 * 사용자가 등록한 맛집 목록 조회 (단순화)
 */
export const findUserRestaurants = async (userId, limit, cursor) => {
  try {
    const restaurants = await prisma.restaurant.findMany({
      take: limit + 1,
      ...(cursor ? {
        cursor: { id: BigInt(cursor) },
        skip: 1
      } : {}),
      orderBy: { id: 'desc' }
    });

    const hasNextPage = restaurants.length > limit;
    const slicedRestaurants = hasNextPage ? restaurants.slice(0, limit) : restaurants;
    const nextCursor = hasNextPage ? slicedRestaurants[slicedRestaurants.length - 1].id : null;

    // BigInt 변환
    const formattedRestaurants = slicedRestaurants.map(restaurant => ({
      ...restaurant,
      id: restaurant.id.toString()
    }));

    return {
      data: formattedRestaurants,
      hasNextPage,
      nextCursor: nextCursor ? nextCursor.toString() : null
    };

  } catch (error) {
    console.error('사용자 맛집 목록 조회 오류:', error);
    throw error;
  }
};

/**
 * 맛집 정보 업데이트 (실제 컬럼만 사용)
 */
export const updateRestaurant = async (restaurantId, data) => {
  try {
    // 실제 존재하는 컬럼만 업데이트
    const updateData = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.repre_menu !== undefined) updateData.repre_menu = data.repre_menu;
    if (data.address !== undefined) updateData.address = data.address;

    const updatedRestaurant = await prisma.restaurant.update({
      where: { id: BigInt(restaurantId) },
      data: updateData
    });

    return {
      ...updatedRestaurant,
      id: updatedRestaurant.id.toString()
    };

  } catch (error) {
    console.error('맛집 업데이트 오류:', error);
    throw error;
  }
};

/**
 * 찜 조회
 */
export const findZzim = async (userId, restaurantId) => {
  try {
    const zzim = await prisma.zzim.findFirst({
      where: {
        user_id: BigInt(userId),
        rest_id: BigInt(restaurantId)
      }
    });

    if (!zzim) return null;

    return {
      ...zzim,
      id: zzim.id.toString(),
      user_id: zzim.user_id.toString(),
      rest_id: zzim.rest_id.toString()
    };

  } catch (error) {
    console.error('찜 조회 오류:', error);
    throw error;
  }
};

/**
 * 찜 생성
 */
export const createZzim = async (userId, restaurantId) => {
  try {
    const newZzim = await prisma.zzim.create({
      data: {
        user_id: BigInt(userId),
        rest_id: BigInt(restaurantId),
        created_at: new Date()
      }
    });

    return {
      ...newZzim,
      id: newZzim.id.toString(),
      user_id: newZzim.user_id.toString(),
      rest_id: newZzim.rest_id.toString()
    };

  } catch (error) {
    console.error('찜 생성 오류:', error);
    throw error;
  }
};

/**
 * 찜 삭제
 */
export const deleteZzim = async (zzimId) => {
  try {
    await prisma.zzim.delete({
      where: { id: BigInt(zzimId) }
    });

    return { success: true };

  } catch (error) {
    console.error('찜 삭제 오류:', error);
    throw error;
  }
};

/**
 * 사용자 찜 개수 조회
 */
export const countUserZzims = async (userId) => {
  try {
    const count = await prisma.zzim.count({
      where: { user_id: BigInt(userId) }
    });

    return count;

  } catch (error) {
    console.error('사용자 찜 개수 조회 오류:', error);
    throw error;
  }
};

/**
 * 사용자 찜 목록 조회 (단순화)
 */
export const findUserZzims = async (userId, limit, cursor) => {
  try {
    const zzimList = await prisma.zzim.findMany({
      where: { user_id: BigInt(userId) },
      include: {
        restaurant: true // 단순 include만 사용
      },
      take: limit + 1,
      ...(cursor ? {
        cursor: { id: BigInt(cursor) },
        skip: 1
      } : {}),
      orderBy: { created_at: 'desc' }
    });

    const hasNextPage = zzimList.length > limit;
    const slicedZzims = hasNextPage ? zzimList.slice(0, limit) : zzimList;
    const nextCursor = hasNextPage ? slicedZzims[slicedZzims.length - 1].id : null;

    // BigInt 변환
    const formattedZzimList = slicedZzims.map(zzim => ({
      ...zzim,
      id: zzim.id.toString(),
      user_id: zzim.user_id.toString(),
      rest_id: zzim.rest_id.toString(),
      restaurant: {
        ...zzim.restaurant,
        id: zzim.restaurant.id.toString()
      }
    }));

    return {
      data: formattedZzimList,
      hasNextPage,
      nextCursor: nextCursor ? nextCursor.toString() : null
    };

  } catch (error) {
    console.error('사용자 찜 목록 조회 오류:', error);
    throw error;
  }
};