export const bodyToChangePasswordDto = (body) => {
  return {
    currentPassword: body.currentPassword,
    newPassword: body.newPassword,
  };
};
