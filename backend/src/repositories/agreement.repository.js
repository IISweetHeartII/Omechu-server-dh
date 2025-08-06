import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

export const createAgreementConsent = async (agreementData) => {
  console.log("Creating Agreement Consent with Data:", agreementData);  // ← 이거 찍어
  try {
    return await prisma.agreement_consent.create({ data: agreementData });
  } catch (error) {
    console.error("Repository Error:", error);  // ← 이거도 찍어
    throw error;
  }
};


export const findLatestAgreementConsent = async (userId) => {
  return await prisma.agreement_consent.findFirst({
    where: { user_id: userId },
    orderBy: { created_at: "desc" }
  });
};