// recommend.management.repository.js
import { prisma } from "../db.config.js";

/**
 * 사용자의 전체 추천 제외 목록 조회
 */
export const findUserExceptedMenus = async (userId) => {
  try {
    const exceptedMenus = await prisma.recommend_except.findMany({
      where: { user_id: BigInt(userId) },
      include: {
        menu: {
          select: {
            id: true,
            name: true,
            image_link: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return exceptedMenus.map((item) => ({
      id: item.id.toString(),
      menu_id: item.menu_id.toString(),
      user_id: item.user_id.toString(),
      menu: {
        id: item.menu.id.toString(),
        name: item.menu.name,
        image_link: item.menu.image_link,
      },
    }));
  } catch (error) {
    console.error("제외 메뉴 목록 조회 오류:", error);
    throw new Error(`Failed to fetch excepted menus: ${error.message}`);
  }
};

/**
 * 전체 메뉴 목록 조회 (추천 가능한 모든 메뉴)
 */
export const findAllAvailableMenus = async () => {
  try {
    const menus = await prisma.menu.findMany({
      select: {
        id: true,
        name: true,
        image_link: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return menus.map((menu) => ({
      id: menu.id.toString(),
      name: menu.name,
      image_link: menu.image_link,
    }));
  } catch (error) {
    console.error("전체 메뉴 조회 오류:", error);
    throw new Error(`Failed to fetch all menus: ${error.message}`);
  }
};

/**
 * 특정 메뉴를 제외 목록에 추가
 */
export const addMenuToExceptList = async (userId, menuId) => {
  try {
    // 이미 제외된 메뉴인지 확인
    const existing = await prisma.recommend_except.findFirst({
      where: {
        user_id: BigInt(userId),
        menu_id: BigInt(menuId),
      },
    });

    if (existing) {
      return {
        id: existing.id.toString(),
        menu_id: existing.menu_id.toString(),
        user_id: existing.user_id.toString(),
        isNew: false,
      };
    }

    // 새로 추가
    const newExcept = await prisma.recommend_except.create({
      data: {
        user_id: BigInt(userId),
        menu_id: BigInt(menuId),
        bit: true, // 제외 상태
      },
    });

    return {
      id: newExcept.id.toString(),
      menu_id: newExcept.menu_id.toString(),
      user_id: newExcept.user_id.toString(),
      isNew: true,
    };
  } catch (error) {
    console.error("제외 메뉴 추가 오류:", error);
    throw new Error(`Failed to add menu to except list: ${error.message}`);
  }
};

/**
 * 제외 목록에서 메뉴 제거 (다시 추천 받기)
 */
export const removeMenuFromExceptList = async (userId, menuId) => {
  try {
    const deleted = await prisma.recommend_except.deleteMany({
      where: {
        user_id: BigInt(userId),
        menu_id: BigInt(menuId),
      },
    });

    return {
      success: deleted.count > 0,
      deletedCount: deleted.count,
    };
  } catch (error) {
    console.error("제외 메뉴 제거 오류:", error);
    throw new Error(`Failed to remove menu from except list: ${error.message}`);
  }
};

/**
 * 메뉴 이름으로 메뉴 ID 조회
 */
export const findMenuByName = async (menuName) => {
  try {
    const menu = await prisma.menu.findFirst({
      where: { name: menuName },
      select: {
        id: true,
        name: true,
        image_link: true,
      },
    });

    if (!menu) return null;

    return {
      id: menu.id.toString(),
      name: menu.name,
      image_link: menu.image_link,
    };
  } catch (error) {
    console.error("메뉴 이름으로 조회 오류:", error);
    throw new Error(`Failed to find menu by name: ${error.message}`);
  }
};
