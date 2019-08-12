import map from 'lodash/map'
import filter from 'lodash/filter'
import {selectCategory} from "../category"

export const selectLocations = (state) => (
  map(state.entities.locations, location => ({
    ...location,
    category: selectCategory(state, location.category)
  }))
)
export const selectLocation = (state, locationId) => state.entities.locations[locationId]

export const selectLocationsForCategory = (state, categoryId) => filter(state.entities.locations, ({category}) => category === categoryId)