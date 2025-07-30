import { prisma } from "../db.config.js";
export const insertMukburim = async (mukburimData) => {
  try {
    const result = await prisma.mukburim.create({
      data: {
        user_id: mukburimData.user_id,
        menu_name: mukburimData.menu_name,
        date: mukburimData.date,
      },
    });
    return {
      ...result,
      id: result.id.toString(),
      user_id: result.user_id.toString(),
    };
  } catch (error) {
    throw new Error(`Failed to insert mukburim: ${error.message}`);
  }
};
