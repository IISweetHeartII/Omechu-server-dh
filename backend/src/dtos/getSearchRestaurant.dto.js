export const BodyToSearchRestaurant = (
  data,
  userId,
  cursor = 0,
  limit = 10
) => {
  return {
    menu: data.menu,
    location: data.location || [],
    tag: data.tag || [],
    userId: parseInt(userId),
    cursor: parseInt(cursor),
    limit: parseInt(limit),
  };
};
