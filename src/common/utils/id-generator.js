import uuidv4 from "uuid/v4";

export const generateId = () => uuidv4();

export const generateUniqueId = existingKeys => {
  let newId = generateId();
  let existingItem = existingKeys[newId];
  while (existingItem) {
    newId = generateId();
    existingItem = existingKeys[newId];
  }

  return newId;
};
