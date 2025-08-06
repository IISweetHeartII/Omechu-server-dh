export const bodyToUser = (body) => {
  return {
    email: body.email,
    password: body.password,
  };
};

export const responseFromUser = (user) => {
  return {
    id: Number(user.id),
    email: user.email,
  };
};
