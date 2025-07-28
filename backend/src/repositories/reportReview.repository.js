import { prisma } from "../db.config.js";

export const addReportData = async ({ reason = "", userId, reviewId }) => {
  if (!reason || !reviewId) {
    return { error: "NO_PARAMS" };
  }
  const findReview = await prisma.review.findFirst({ where: { id: reviewId } });
  if (!findReview) {
    return { error: "NO_REVIEW_DATA" };
  }
  const reportData = await prisma.report.create({
    data: { user_id: userId, review_id: reviewId, text: reason },
  });
  if (!reportData) {
    return { error: "CANT_REPORT_REVIEW" };
  }
  return {
    id: reportData.id.toString(),
    userId: reportData.user_id.toString(),
    reviewId: reportData.review_id.toString(),
    reason: reportData.text.toString(),
  };
};
