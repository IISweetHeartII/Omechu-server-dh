import { insertMukburim } from '../repositories/mukburim.repository.js';

export const insertMukburimService = async (mukburimData) => {
  try {
    // Validate required fields
    if (!mukburimData.user_id || !mukburimData.menu_name) {
      throw new Error('user_id and menu_name are required');
    }

    // Add current date if not provided
    if (!mukburimData.date) {
      throw new Error('Date is required');
    }

    const result = await insertMukburim(mukburimData);
    return result;
  } catch (error) {
    throw error;
  }
};

