import { prisma } from "../db.config.js";

export const userLogin = async (data) => {
  console.log("Data", data.password);
  const user = await prisma.user.findFirst({ where: { email: data.email } });
  if (user === null) {
    return { error: "NO_USER" };
  } else if (user.password != data.password) {
    return { error: "IN_CORRECT_PASSWORD" };
  } else {
    return user;
  }
};
