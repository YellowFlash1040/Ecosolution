export const transformLinkIntoText = (link: string) => {
  const result = link.replace(/-/g, ' ').replace(/#/g, '');
  return result;
};
