import { DuplicatedUserData } from "../errors.js";
import { PrismaClient } from "../generated/prisma/index.js";

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
        email: true,
      },
    });

    return user;
  } catch (error) {
    console.error("이메일로 사용자 조회 오류:", error);
    throw error;
  }
};

/**
 * 사용자 프로필 조회
 */
export const findUserProfile = async (userId) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        nickname: true,
        body_type: true,
        gender: true,
        exercise: true,
        profileImageUrl: true,
        created_at: true,
        updated_at: true,
        prefer: {
          where: { userId: userId },
          select: { prefer: true },
        },
        allergy: {
          where: { userId: userId },
          select: { allergy: true },
        },
      },
    });
    if (!user) return null;
    // BigInt 변환
    return {
      ...user,
      id: user.id.toString(),
    };
  } catch (error) {
    console.error("사용자 프로필 조회 오류:", error);
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
      updated_at: new Date(),
    };
    // undefined 값 제거
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    });

    // 트랜잭션으로 처리
    const result = await prisma.$transaction(async (tx) => {
      let updatedUser;
      // 1. 기본 사용자 정보 업데이트
      try {
        updatedUser = await tx.user.update({
          where: { id: BigInt(userId) },
          data: {
            email: updateData.email,
            nickname: updateData.nickname,
            body_type: updateData.body_type,
            gender: updateData.gender,
            exercise: updateData.exercise,
            profileImageUrl: updateData.profileImageUrl,
          },
        });
      } catch (error) {
        if (error.code === "P2002") {
          throw new DuplicatedUserData("변경하려는 이메일이 이미 존재합니다", {
            email: updateData.email,
          });
        }
      }

      // 2. prefer 데이터 처리 (기존 데이터 삭제 후 새로 추가)
      if (data.prefer !== undefined) {
        await tx.prefer.deleteMany({
          where: { userId: userId },
        });

        if (data.prefer && data.prefer.length > 0) {
          // 피그마 텍스트를 enum으로 변환
          const preferEnums = data.prefer
            .map((p) => convertPreferToEnum(p))
            .filter((p) => p !== null);

          if (preferEnums.length > 0) {
            await tx.prefer.createMany({
              data: preferEnums.map((prefer) => ({
                userId: userId,
                prefer: prefer,
              })),
            });
          }
        }
      }

      // 3. allergy 데이터 처리 (기존 데이터 삭제 후 새로 추가)
      if (data.allergy !== undefined) {
        await tx.allergy.deleteMany({
          where: { userId: userId },
        });

        if (data.allergy && data.allergy.length > 0) {
          // 피그마 텍스트를 enum으로 변환
          const allergyEnums = data.allergy
            .map((a) => convertAllergyToEnum(a))
            .filter((a) => a !== null);

          if (allergyEnums.length > 0) {
            await tx.allergy.createMany({
              data: allergyEnums.map((allergy) => ({
                userId: userId,
                allergy: allergy,
              })),
            });
          }
        }
      }

      return updatedUser;
    });

    // 최종 사용자 정보 조회 (prefer, allergy 포함)
    const finalUser = await prisma.user.findFirst({
      where: { id: userId },
      include: {
        prefer: true,
        allergy: true,
      },
    });
    console.log("finalUser", finalUser);
    return {
      ...finalUser,
      id: finalUser.id.toString(),
      prefer: finalUser.prefer.map((p) => convertPrefer(p.prefer)),
      allergy: finalUser.allergy.map((a) => convertAllergy(a.allergy)),
    };
  } catch (error) {
    console.error("사용자 프로필 업데이트 오류:", error);
    throw error;
  }
};

/**
 * 맛집 정보 조회 (실제 DB 구조에 맞게 단순화)
 */
export const findRestaurantById = async (restaurantId) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { id: BigInt(restaurantId) },
    });

    if (!restaurant) return null;

    return {
      ...restaurant,
      id: restaurant.id.toString(),
    };
  } catch (error) {
    console.error("맛집 조회 오류:", error);
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
    console.error("사용자 맛집 개수 조회 오류:", error);
    throw error;
  }
};

/**
 * 사용자가 등록한 맛집 목록 조회 (단순화)
 */
export const findUserRestaurants = async (userId, cursor, limit) => {
  try {
    const isFirstPage = cursor === 0;
    const userRestData = await prisma.user_rest.findMany({
      where: { user_id: userId },
    });

    const restId = userRestData.map((data) => Number(data.rest_id));
    const restaurants = await prisma.restaurant.findMany({
      select: {
        id: true,
        rest_image: true,
        name: true,
        address: true,
        rating: true,
        repre_menu: {
          select: {
            menu: true,
          },
        },
        _count: {
          select: {
            review: true,
          },
        },
      },
      where: {
        id: { in: restId },
      },
      take: limit + 1,
      ...(isFirstPage
        ? {}
        : {
            cursor: { id: cursor },
            skip: 1,
          }),
      orderBy: { id: "asc" },
    });
    console.log("restaurants", restaurants);
    const hasNextPage = restaurants.length > limit;
    const slicedRestaurants = hasNextPage
      ? restaurants.slice(0, limit)
      : restaurants;
    const nextCursor = hasNextPage
      ? slicedRestaurants[slicedRestaurants.length - 1].id
      : null;
    // BigInt 변환
    const formattedRestaurants = slicedRestaurants.map((restaurant) => ({
      ...restaurant,
      id: restaurant.id.toString(),
    }));

    return {
      data: formattedRestaurants,
      hasNextPage,
      nextCursor: nextCursor ? nextCursor.toString() : null,
    };
  } catch (error) {
    console.error("사용자 맛집 목록 조회 오류:", error);
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
      data: updateData,
    });

    return {
      ...updatedRestaurant,
      id: updatedRestaurant.id.toString(),
    };
  } catch (error) {
    console.error("맛집 업데이트 오류:", error);
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
        rest_id: BigInt(restaurantId),
      },
    });

    if (!zzim) return null;

    return {
      ...zzim,
      id: zzim.id.toString(),
      user_id: zzim.user_id.toString(),
      rest_id: zzim.rest_id.toString(),
    };
  } catch (error) {
    console.error("찜 조회 오류:", error);
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
        created_at: new Date(),
      },
    });

    return {
      ...newZzim,
      id: newZzim.id.toString(),
      user_id: newZzim.user_id.toString(),
      rest_id: newZzim.rest_id.toString(),
    };
  } catch (error) {
    console.error("찜 생성 오류:", error);
    throw error;
  }
};

/**
 * 찜 삭제
 */
export const deleteZzim = async (zzimId) => {
  try {
    await prisma.zzim.delete({
      where: { id: BigInt(zzimId) },
    });

    return { success: true };
  } catch (error) {
    console.error("찜 삭제 오류:", error);
    throw error;
  }
};

/**
 * 사용자 찜 개수 조회
 */
export const countUserZzims = async (userId) => {
  try {
    const count = await prisma.zzim.count({
      where: { user_id: BigInt(userId) },
    });

    return count;
  } catch (error) {
    console.error("사용자 찜 개수 조회 오류:", error);
    throw error;
  }
};

/**
 * 사용자 찜 목록 조회
 */
export const findUserZzims = async (userId, limit, cursor) => {
  try {
    const zzimList = await prisma.zzim.findMany({
      where: { user_id: BigInt(userId) },
      include: {
        restaurant: {
          include: {
            // 대표 메뉴 정보
            repre_menu: {
              select: {
                menu: true,
              },
              take: 3, // 대표 메뉴 최대 3개
            },
            // 리뷰 정보 (개수 계산용)
            review: {
              select: {
                id: true,
                rating: true,
              },
            },
            // 태그 정보
            rest_tag: {
              select: {
                tag: true,
                count: true,
              },
              orderBy: {
                count: "desc",
              },
              take: 3, // 상위 태그 3개
            },
          },
        },
      },
      take: limit + 1,
      ...(cursor
        ? {
            cursor: { id: BigInt(cursor) },
            skip: 1,
          }
        : {}),
      orderBy: { created_at: "desc" },
    });

    const hasNextPage = zzimList.length > limit;
    const slicedZzims = hasNextPage ? zzimList.slice(0, limit) : zzimList;
    const nextCursor = hasNextPage
      ? slicedZzims[slicedZzims.length - 1].id
      : null;

    // 데이터 가공
    const formattedZzimList = slicedZzims.map((zzim) => {
      const restaurant = zzim.restaurant;

      // 리뷰 개수 계산
      const reviewCount = restaurant.review.length;

      // 평균 평점 계산 (BigInt 변환 처리)
      let averageRating = restaurant.rating || 0;
      if (restaurant.review.length > 0) {
        const totalRating = restaurant.review.reduce((sum, review) => {
          // BigInt를 Number로 변환해서 계산
          const ratingValue = review.rating ? Number(review.rating) : 0;
          return sum + ratingValue;
        }, 0);
        averageRating =
          Math.round((totalRating / restaurant.review.length) * 10) / 10;
      }

      // 대표 메뉴 추출
      const representativeMenus = restaurant.repre_menu.map(
        (item) => item.menu
      );

      // 태그 정보 추출
      const tags = restaurant.rest_tag.map((tagItem) => ({
        tag: tagItem.tag,
        count: tagItem.count,
      }));

      return {
        ...zzim,
        id: zzim.id.toString(),
        user_id: zzim.user_id.toString(),
        rest_id: zzim.rest_id.toString(),
        restaurant: {
          ...restaurant,
          id: restaurant.id.toString(),
          rating: averageRating, // 계산된 평균 평점
          reviewCount: reviewCount, // 리뷰 개수
          representativeMenus: representativeMenus, // 대표 메뉴들
          tags: tags, // 태그 정보
          // review 데이터는 제거 (내부 계산용이므로)
          review: undefined,
          repre_menu: undefined,
          rest_tag: undefined,
        },
      };
    });

    return {
      data: formattedZzimList,
      hasNextPage,
      nextCursor: nextCursor ? nextCursor.toString() : null,
    };
  } catch (error) {
    console.error("사용자 찜 목록 조회 오류:", error);
    throw new Error(`Failed to fetch user zzims: ${error.message}`);
  }
};

// ============= Enum 변환 함수들 =============

function convertPreferToEnum(prefer) {
  const map = {
    한식: "korean",
    양식: "western",
    중식: "chinese",
    일식: "japanese",
    다른나라: "other",
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

// ====================== 1. mypage.repository.js에 추가 ======================

/**
 * 사용자가 작성한 리뷰 목록 조회 (레스토랑 정보 포함)
 */
export const findUserReviews = async (userId, limit, cursor) => {
  try {
    const reviewList = await prisma.review.findMany({
      where: { user_id: BigInt(userId) },
      include: {
        restaurant: {
          include: {
            // 대표 메뉴 정보
            repre_menu: {
              select: {
                menu: true,
              },
              take: 3,
            },
            // 태그 정보
            rest_tag: {
              select: {
                tag: true,
                count: true,
              },
              orderBy: {
                count: "desc",
              },
              take: 3,
            },
          },
        },
        // 리뷰 이미지 정보
        review_image: {
          select: {
            link: true,
          },
        },
      },
      take: limit + 1,
      ...(cursor
        ? {
            cursor: { id: BigInt(cursor) },
            skip: 1,
          }
        : {}),
      orderBy: { created_at: "desc" },
    });

    const hasNextPage = reviewList.length > limit;
    const slicedReviews = hasNextPage ? reviewList.slice(0, limit) : reviewList;
    const nextCursor = hasNextPage
      ? slicedReviews[slicedReviews.length - 1].id
      : null;

    // 데이터 가공
    const formattedReviewList = slicedReviews.map((review) => {
      const restaurant = review.restaurant;

      // 대표 메뉴 추출
      const representativeMenus = restaurant.repre_menu.map(
        (item) => item.menu
      );

      // 태그 정보 추출
      const tags = restaurant.rest_tag.map((tagItem) => ({
        tag: tagItem.tag,
        count: tagItem.count,
      }));

      // 리뷰 이미지 추출
      const reviewImages = review.review_image.map((img) => img.link);

      return {
        ...review,
        id: review.id.toString(),
        user_id: review.user_id.toString(),
        rest_id: review.rest_id.toString(),
        rating: Number(review.rating), // BigInt 변환
        restaurant: {
          ...restaurant,
          id: restaurant.id.toString(),
          rating: restaurant.rating || 0,
          representativeMenus: representativeMenus,
          tags: tags,
          // 불필요한 데이터 제거
          repre_menu: undefined,
          rest_tag: undefined,
        },
        reviewImages: reviewImages,
        // 불필요한 데이터 제거
        review_image: undefined,
      };
    });

    return {
      data: formattedReviewList,
      hasNextPage,
      nextCursor: nextCursor ? nextCursor.toString() : null,
    };
  } catch (error) {
    console.error("사용자 리뷰 목록 조회 오류:", error);
    throw new Error(`Failed to fetch user reviews: ${error.message}`);
  }
};
