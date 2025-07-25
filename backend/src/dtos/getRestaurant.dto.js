export const bodyToGetRest = ({ data, cursor = 0, limit = 10 }) => {
  return {
    location: data.location || [],
    keyword: data.keyword || [],
    cursor: parseInt(cursor),
    limit: parseInt(limit),
  };
};
