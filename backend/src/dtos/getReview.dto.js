export const responseFromGetReview = ({
  reviewData,
  mostTag,
  allReviewCount,
  avgRating,
  hasNextPage,
  nextCursor,
}) => {
  const totalReview = reviewData.map((data) => {
    return {
      id: data.id.toString(),
      user: data.user,
      rating: data.rating.toString(),
      tag: data.tag,
      text: data.text,
      created_at: data.created_at,
      like: data.like,
      reviewImg: data.review_image.map((img) => img.link),
    };
  });
  console.log(totalReview);
  const tag = mostTag.map((tagData) => {
    return {
      restId: tagData.rest_id.toString(),
      tag: tagData.tag,
      count: tagData.count,
    };
  });
  return {
    data: totalReview,
    mostTag: tag,
    allReviewCount: allReviewCount,
    avgRating: avgRating,
    nextCursor: nextCursor ? parseInt(nextCursor, 10) : null,
    hasNextPage: hasNextPage,
  };
};
