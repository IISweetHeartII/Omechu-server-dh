export const bodyToAddReview = ({ data, storeId, userId }) => {
  return {
    userId: userId || null,
    restId: storeId || null,
    rating: data.rating,
    tag: data.tag,
    imageUrl: data.imageUrl || null,
    reviewText: data.reviewText,
  };
};
