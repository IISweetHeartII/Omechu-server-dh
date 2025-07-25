export const bodyToAddRest = (data, userId) => {
  const repreMenu = data.repre_menu.map((repreData, index) => ({
    [`repreMenu${index}`]: repreData,
  }));

  return {
    userId: userId,
    imageUrl: data.imageUrl,
    name: data.name,
    repreMenu: repreMenu,
    opening_hour: data.opening_hour,
    address: data.address,
  };
};

export const responsesFromAddRest = (data) => {
  return {
    id: data.id.toString(),
    name: data.name,
    address: data.address,
  };
};
