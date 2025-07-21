import { prisma } from "../db.config.js";

export const userLogin = async (data) => {
  console.log("Data", data.email);
  const user = await prisma.user.findFirst({ where: { email: data.email } });

  if (user.password != data.password) {
    return null;
  } else {
    return user;
  }
};
