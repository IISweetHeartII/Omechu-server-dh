export const responseFromLike = (data) => {
  return { reviewId: data.id.toString(), restId: data.rest_id.toString() };
};
