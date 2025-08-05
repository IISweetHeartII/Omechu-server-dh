import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const createAgreementConsent = async (agreementData) => {
  return await prisma.agreement_consent.create({ data: agreementData });
};

export const findLatestAgreementConsent = async (userId) => {
  return await prisma.agreement_consent.findFirst({
    where: { user_id: userId },
    orderBy: { created_at: "desc" }
  });
};