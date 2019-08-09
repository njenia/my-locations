import {generateId} from "./id-generator"

const LOCATIONS = 'locations'
const CATEGORIES = 'categories'
const MY_LOCATIONS_DATA_INITIALIZED = 'my_locations_data_initialized'

export const persistNewLocation = (location) => {
  const allLocations = JSON.parse(localStorage.getItem(LOCATIONS));
  let locationId = generateId();
  let existingItem = allLocations[locationId];
  while (existingItem) {
    locationId = generateId()
    existingItem = allLocations[locationId];
  }
  location.id = locationId;
  const updatedLocations = JSON.stringify({
    ...allLocations,
    [locationId]: location
  });
  localStorage.setItem(LOCATIONS, updatedLocations);

  return locationId;
}

export const persistNewCategory = (category) => {
  const allCategories = JSON.parse(localStorage.getItem(CATEGORIES));
  let categoryId = generateId();
  let existingItem = allCategories[categoryId];
  while (existingItem) {
    categoryId = generateId()
    existingItem = allCategories[categoryId];
  }
  category.id = categoryId;
  const updatedCategories = JSON.stringify({
    ...allCategories,
    [categoryId]: category
  });
  localStorage.setItem(CATEGORIES, updatedCategories);

  return categoryId;
}


export const initDb = () => {
  if (!localStorage.getItem(MY_LOCATIONS_DATA_INITIALIZED)) {
    localStorage.setItem(LOCATIONS, JSON.stringify({}));
    localStorage.setItem(CATEGORIES, JSON.stringify({}));
    localStorage.setItem(MY_LOCATIONS_DATA_INITIALIZED, JSON.stringify(true));
  }
}

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
  } catch(err) {
    return {};
  }
}