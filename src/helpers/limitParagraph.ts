export const limitParagraph = (str?: string, num?: number) => {
  const length = str?.length;
  if (length === undefined || num === undefined) return;
  if (num < length) {
    return str?.slice(0, num) + "...";
  }
  return str;
};
