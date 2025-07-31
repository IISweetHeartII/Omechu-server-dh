import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

/**
 * 이메일로 사용자 조회 (중복 체크용)
 */
export const findUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        email: true
      }
    });

    return user;
  } catch (error) {
    console.error('이메일로 사용자 조회 오류:', error);
    throw error;
  }
};

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
    // 실제 DB 필드에 맞게 수정 (prefer, allergy는 별도 테이블이므로 제외)
    const updateData = {
      email: data.email,
      nickname: data.nickname,
      body_type: data.body_type,
      gender: data.gender,
      exercise: data.exercise,
      profileImageUrl: data.profileImageUrl,
      updated_at: new Date()
    };

    // undefined 값 제거
    Object.keys(updateData).forEach(key => {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    });

    // 트랜잭션으로 처리
    const result = await prisma.$transaction(async (tx) => {
      // 1. 기본 사용자 정보 업데이트
      const updatedUser = await tx.user.update({
        where: { id: BigInt(userId) },
        data: updateData
      });

      // 2. prefer 데이터 처리 (기존 데이터 삭제 후 새로 추가)
      if (data.prefer !== undefined) {
        await tx.prefer.deleteMany({
          where: { userId: BigInt(userId) }
        });

        if (data.prefer && data.prefer.length > 0) {
          // 피그마 텍스트를 enum으로 변환
          const preferEnums = data.prefer.map(p => convertPreferToEnum(p)).filter(p => p !== null);
          
          if (preferEnums.length > 0) {
            await tx.prefer.createMany({
              data: preferEnums.map(prefer => ({
                userId: BigInt(userId),
                prefer: prefer
              }))
            });
          }
        }
      }

      // 3. allergy 데이터 처리 (기존 데이터 삭제 후 새로 추가)
      if (data.allergy !== undefined) {
        await tx.allergy.deleteMany({
          where: { userId: BigInt(userId) }
        });

        if (data.allergy && data.allergy.length > 0) {
          // 피그마 텍스트를 enum으로 변환
          const allergyEnums = data.allergy.map(a => convertAllergyToEnum(a)).filter(a => a !== null);
          
          if (allergyEnums.length > 0) {
            await tx.allergy.createMany({
              data: allergyEnums.map(allergy => ({
                userId: BigInt(userId),
                allergy: allergy
              }))
            });
          }
        }
      }

      return updatedUser;
    });

    // 최종 사용자 정보 조회 (prefer, allergy 포함)
    const finalUser = await prisma.user.findUnique({
      where: { id: BigInt(userId) },
      include: {
        prefer: true,
        allergy: true
      }
    });

    return {
      ...finalUser,
      id: finalUser.id.toString(),
      prefer: finalUser.prefer.map(p => convertPrefer(p.prefer)),
      allergy: finalUser.allergy.map(a => convertAllergy(a.allergy))
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
        restaurant: true
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

// ============= Enum 변환 함수들 (user.dto.js와 일관성 유지) =============

function convertPreferToEnum(prefer) {
  const map = {
    "한식": "korean",
    "양식": "western", 
    "중식": "chinese",
    "일식": "japanese",
    "다른나라": "other",
  };
  return map[prefer] ?? null;
}

function convertPrefer(prefer) {
  const map = {
    korean: "한식",
    western: "양식",
    chinese: "중식", 
    japanese: "일식",
    other: "다른나라",
  };
  return map[prefer] ?? prefer;
}

function convertAllergyToEnum(allergy) {
  const map = {
    "달걀(난류) 알레르기": "egg",
    "우유 알레르기": "milk",
    "갑각류 알레르기": "shellfish", 
    "해산물 알레르기": "seafood",
    "견과류 알레르기": "nuts",
  };
  return map[allergy] ?? null;
}

function convertAllergy(allergy) {
  const map = {
    egg: "달걀(난류) 알레르기",
    milk: "우유 알레르기",
    shellfish: "갑각류 알레르기",
    seafood: "해산물 알레르기", 
    nuts: "견과류 알레르기",
  };
  return map[allergy] ?? allergy;
}