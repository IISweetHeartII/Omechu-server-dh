import { createAgreementConsent, findLatestAgreementConsent } from "../repositories/agreement.repository.js";
import { InvalidRequestError } from "../errors.js";

export const handleAgreementConsentService = async (agreementData) => {
  const { terms_of_service, privacy_policy, location_service, is_over14 } = agreementData;

  if (!terms_of_service || !privacy_policy || !location_service || !is_over14) {
    throw new InvalidRequestError("필수 항목에 동의하지 않았습니다.");
  }

  const result = await createAgreementConsent(agreementData);
  return result;
};

export const getAgreementConsentService = async (userId) => {
  const consent = await findLatestAgreementConsent(userId);

  if (!consent) {
    throw new InvalidRequestError("약관 동의 정보가 존재하지 않습니다.");
  }

  return consent;
};