export const renameKey = (object: any, oldKey: string, newKey: string) => {
  object[newKey] = JSON.parse(JSON.stringify(object[oldKey]));
  delete object[oldKey];
  return object;
};
