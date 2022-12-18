export const limitParagraph = (str: string, num: number) => {
  const { length } = str;
  if (num < length) {
    return str.slice(0, num) + "...";
  }
  return str;
};
