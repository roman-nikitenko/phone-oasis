export const capitalizeFirstLetter = (word: string): string => {
  return word[0].toUpperCase() + word.substring(1);
};

export const transformProductName = (path: string): string => {
  return path
    .split('-')
    .map((word) => capitalizeFirstLetter(word))
    .join(' ');
};

export const transformProductNameIntoPath = (name: string): string => {
  return name.split('(')[0].trim().replace(/ /g, '-').toLowerCase();
};
