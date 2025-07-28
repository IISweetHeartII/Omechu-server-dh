import { addReportData } from "../repositories/reportReview.repository.js";
import { NoParams, FailToReportReview } from "../errors.js";
export const reportReveiw = async ({ reason = "", userId, reviewId }) => {
  const reportData = await addReportData({
    reason: reason,
    userId: userId,
    reviewId: reviewId,
  });
  if (reportData.error == "NO_PARAMS") {
    throw new NoParams("올바른 파라미터가 전달되지 않았습니다.", {
      reason,
      reviewId,
    });
  } else if (reportData.error == "CANT_REPORT_REVIEW") {
    throw new FailToReportReview("리뷰 신고하기 실패했습니다", {
      reason,
      reviewId,
    });
  } else if (reportData.error == "NO_REVIEW_DATA") {
    throw new NoParams("해당 리뷰의 데이터가 없습니다.", {
      reviewId: reviewId,
    });
  } else {
    return reportData;
  }
};
