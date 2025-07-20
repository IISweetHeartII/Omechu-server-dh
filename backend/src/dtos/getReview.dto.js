export const responseFromGetReview = ({
  reviewData,
  hasNextPage,
  nextCursor,
}) => {
  const totalReview = reviewData.map((data) => {
    return {
      id: data.id.toString(),
      rating: data.rating.toString(),
      tag: data.tag,
      text: data.text,
      created_at: data.created_at,
      like: data.like,
      user: data.user,
    };
  });
  return {
    data: totalReview,
    nextCursor: parseInt(nextCursor),
    hasNextPage: hasNextPage,
  };
};
