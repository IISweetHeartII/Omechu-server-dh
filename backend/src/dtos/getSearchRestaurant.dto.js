export const BodyToSearchRestaurant = ({ menu, location, category }) => {
  return { menu: menu, location: location || [], category: category || [] };
};
