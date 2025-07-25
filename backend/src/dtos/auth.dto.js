export const bodyToUser = (body) => {
  return {
    email: body.email,
    password: body.password,
  };
};


export const responseFromUser = (user) => {
  return {
    id: user.id,
    email: user.email,
  };
};