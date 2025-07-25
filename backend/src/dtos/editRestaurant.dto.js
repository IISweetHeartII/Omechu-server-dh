export const bodyToEditRestaurant = (data, params, userId) => {
  const opening_hour = {
    monday: data.opening_hour.monday || "휴무",
    tuesday: data.opening_hour.tuesday || "휴무",
    wednesday: data.opening_hour.wednesday || "휴무",
    thursday: data.opening_hour.thursday || "휴무",
    friday: data.opening_hour.friday || "휴무",
    saturday: data.opening_hour.saturday || "휴무",
    sunday: data.opening_hour.sunday || "휴무",
  };
  const newData = {
    imageUrl: data.imageUrl,
    name: data.name,
    repre_menu: data.repre_menu,
    opening_hour: opening_hour,
    address: data.address,
    google_place_id: data.google_place_id || null,
  };
  return { data: newData, params: params, userId: userId };
};
