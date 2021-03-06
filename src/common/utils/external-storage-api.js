import keys from "lodash/keys";

import { generateUniqueId } from "./id-generator";

const LOCATIONS = "locations";
const CATEGORIES = "categories";
const MY_LOCATIONS_DATA_INITIALIZED = "my_locations_data_initialized";

export const persistLocation = location => {
  const allLocations = JSON.parse(localStorage.getItem(LOCATIONS));
  if (!location.id) {
    location.id = generateUniqueId(keys(allLocations));
  }
  const updatedLocations = JSON.stringify({
    ...allLocations,
    [location.id]: location
  });
  localStorage.setItem(LOCATIONS, updatedLocations);

  return location.id;
};

export const persistCategory = category => {
  const allCategories = JSON.parse(localStorage.getItem(CATEGORIES));
  if (!category.id) {
    category.id = generateUniqueId(keys(allCategories));
  }
  const updatedCategories = JSON.stringify({
    ...allCategories,
    [category.id]: category
  });
  localStorage.setItem(CATEGORIES, updatedCategories);

  return category.id;
};

export const externalDeleteLocation = locationId => {
  const allLocations = JSON.parse(localStorage.getItem(LOCATIONS));
  delete allLocations[locationId];
  localStorage.setItem(LOCATIONS, JSON.stringify(allLocations));
};

export const externalDeleteCategory = categoryId => {
  const allCategories = JSON.parse(localStorage.getItem(CATEGORIES));
  delete allCategories[categoryId];
  localStorage.setItem(CATEGORIES, JSON.stringify(allCategories));
};

export const initDb = () => {
  if (!localStorage.getItem(MY_LOCATIONS_DATA_INITIALIZED)) {
    localStorage.setItem(LOCATIONS, JSON.stringify({}));
    localStorage.setItem(CATEGORIES, JSON.stringify({}));
    localStorage.setItem(MY_LOCATIONS_DATA_INITIALIZED, JSON.stringify(true));
  }
};

export const loadState = () => {
  try {
    const locations = JSON.parse(localStorage.getItem(LOCATIONS));
    const categories = JSON.parse(localStorage.getItem(CATEGORIES));
    return {
      entities: {
        locations,
        categories
      }
    };
  } catch (err) {
    return {};
  }
};
