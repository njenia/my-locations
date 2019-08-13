import map from 'lodash/map'
import filter from 'lodash/filter'

import {selectCategory} from "../category"

export const selectLocations = (state) => (
  map(state.entities.locations, location => ({
    ...location,
    category: selectCategory(state, location.category)
  }))
)
export const selectLocation = (state, locationId) => {
  const location = state.entities.locations[locationId];
  const category = selectCategory(state, location.category);
  return {
    ...location,
    category
  }
}

export const selectLocationsForCategory = (state, categoryId) => filter(state.entities.locations, ({category}) => category === categoryId)