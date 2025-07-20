export const bodyToUser = (body) => {
  return {
    email: body.email,
    password: body.password,
    phoneNumber: body.phoneNumber,
  };
};


export const responseFromUser = (user) => {
  return {
    id: user.id,
    email: user.email,
    phoneNumber: user.phone_num,
  };
};