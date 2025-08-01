// recommend.management.service.js
import {
  findUserExceptedMenus,
  findAllAvailableMenus,
  addMenuToExceptList,
  removeMenuFromExceptList,
  findMenuByName
} from '../repositories/recommend.management.repository.js';

import {
  NoParams,
  NoRestData,
  NoInCorrectParmas,
  NoInCorrectData
} from '../errors.js';

/**
 * 추천 목록 관리 조회 서비스
 * - 추천 받을 메뉴 (전체 - 제외된 것들)
 * - 제외된 메뉴 목록
 */
export const getRecommendManagementService = async (userId) => {
  if (!userId) {
    throw new NoParams('사용자 ID가 필요합니다.', { userId });
  }

  try {
    // 1. 전체 메뉴 조회
    const allMenus = await findAllAvailableMenus();
    
    // 2. 제외된 메뉴 조회
    const exceptedMenus = await findUserExceptedMenus(userId);
    
    // 3. 제외된 메뉴 ID 목록
    const exceptedMenuIds = exceptedMenus.map(item => item.menu_id);
    
    // 4. 추천 받을 메뉴 (전체 - 제외된 것들)
    const recommendMenus = allMenus.filter(menu => !exceptedMenuIds.includes(menu.id));

    return {
      summary: {
        totalMenus: allMenus.length,
        recommendMenus: recommendMenus.length,
        exceptedMenus: exceptedMenus.length
      },
      recommendMenus: recommendMenus,
      exceptedMenus: exceptedMenus.map(item => item.menu)
    };
  } catch (error) {
    if (error instanceof NoParams) {
      throw error;
    }
    
    throw new NoRestData('추천 목록 관리 조회 중 오류가 발생했습니다.', { 
      userId, 
      error: error.message 
    });
  }
};

/**
 * 메뉴를 제외 목록에 추가 (추천 받지 않기)
 */
export const addMenuToExceptService = async (userId, menuId, menuName) => {
  if (!userId) {
    throw new NoParams('사용자 ID가 필요합니다.', { userId });
  }

  let targetMenuId = menuId;

  // menuName이 제공된 경우 menuId 조회
  if (!menuId && menuName) {
    const menu = await findMenuByName(menuName);
    if (!menu) {
      throw new NoInCorrectData('해당 이름의 메뉴를 찾을 수 없습니다.', { menuName });
    }
    targetMenuId = menu.id;
  }

  if (!targetMenuId) {
    throw new NoInCorrectParmas('메뉴 ID 또는 메뉴 이름이 필요합니다.', { menuId, menuName });
  }

  try {
    const result = await addMenuToExceptList(userId, targetMenuId);
    
    if (!result.isNew) {
      throw new NoInCorrectData('이미 제외된 메뉴입니다.', { 
        userId, 
        menuId: targetMenuId 
      });
    }

    // 추가된 메뉴 정보 조회
    const menu = await findMenuByName(menuName) || { 
      id: targetMenuId, 
      name: '알 수 없는 메뉴' 
    };

    return {
      id: result.id,
      menu: menu,
      message: '메뉴가 제외 목록에 추가되었습니다.'
    };
  } catch (error) {
    if (error instanceof NoParams || 
        error instanceof NoInCorrectData || 
        error instanceof NoInCorrectParmas) {
      throw error;
    }
    
    throw new NoRestData('메뉴 제외 처리 중 오류가 발생했습니다.', { 
      userId, 
      menuId: targetMenuId, 
      error: error.message 
    });
  }
};

/**
 * 제외 목록에서 메뉴 제거 (다시 추천 받기)
 */
export const removeMenuFromExceptService = async (userId, menuId, menuName) => {
  if (!userId) {
    throw new NoParams('사용자 ID가 필요합니다.', { userId });
  }

  let targetMenuId = menuId;

  // menuName이 제공된 경우 menuId 조회
  if (!menuId && menuName) {
    const menu = await findMenuByName(menuName);
    if (!menu) {
      throw new NoInCorrectData('해당 이름의 메뉴를 찾을 수 없습니다.', { menuName });
    }
    targetMenuId = menu.id;
  }

  if (!targetMenuId) {
    throw new NoInCorrectParmas('메뉴 ID 또는 메뉴 이름이 필요합니다.', { menuId, menuName });
  }

  try {
    const result = await removeMenuFromExceptList(userId, targetMenuId);
    
    if (!result.success) {
      throw new NoInCorrectData('제외 목록에서 해당 메뉴를 찾을 수 없습니다.', { 
        userId, 
        menuId: targetMenuId 
      });
    }

    return {
      success: true,
      message: '메뉴가 제외 목록에서 제거되었습니다. 이제 추천을 받을 수 있습니다.'
    };
  } catch (error) {
    if (error instanceof NoParams || 
        error instanceof NoInCorrectData || 
        error instanceof NoInCorrectParmas) {
      throw error;
    }
    
    throw new NoRestData('메뉴 제외 해제 처리 중 오류가 발생했습니다.', { 
      userId, 
      menuId: targetMenuId, 
      error: error.message 
    });
  }
};