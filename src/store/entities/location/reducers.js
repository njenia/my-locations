import {SET_LOCATION, UNSET_LOCATION} from './actions'

export const locationsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        [action.location.id]: action.location
      }
    case UNSET_LOCATION:
      delete state[action.locationId];
      return state;
    default:
      return state
  }
}
