export const bodyToResetRequestDto = (body) => {
  return { email: body.email };
};

export const bodyToResetPasswordDto = (body) => {
  return { newPassword: body.newPassword };
};
