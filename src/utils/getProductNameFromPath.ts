export const getProductNameFromPath = (path: string): string => {
  return path
    .split('-')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
};
