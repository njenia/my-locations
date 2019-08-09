import map from 'lodash/map'
import {getCategory} from "../category"

export const getLocations = (locations, categories) => (
  map(locations, location => ({
    ...location,
    category: getCategory(categories, location.category)
  }))
)
export const getLocation = (locations, locationId) => locations[locationId]