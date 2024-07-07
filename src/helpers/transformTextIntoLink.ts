export const transformTextIntoLink = (text: string) => {
  const result = '#' + text.replace(/ /g, '-');
  return result;
};
