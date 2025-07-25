import {
  findUserById,
  updateUserInfo,
  createUserPreferences,
  createUserAllergies,
} from "../repositories/user.repository.js";

import { bodyToUserInfo, responseFromUser } from "../dtos/user.dto.js";

export const patchUserProfileService = async (userId, body) => {
  try {
    const userData = bodyToUserInfo(body, userId);
    console.log("updateUserInfo에 전달될 데이터:", userData);

    await updateUserInfo(userId, userData);

    if (body.prefer?.length) {
      const preferEnums = body.prefer;
      await createUserPreferences(userId, preferEnums);
    }

    if (body.allergy?.length) {
      const allergyEnums = body.allergy; 
      await createUserAllergies(userId, allergyEnums);
    }

    const updatedUser = await findUserById(userId);
    return responseFromUser(updatedUser);
  } catch (error) {
    console.error("patchUserProfileService 에러:", error.message);
    console.error("meta:", error.meta);
    throw error;
  }
};

