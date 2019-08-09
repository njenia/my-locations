import {SET_LOCATION} from './actions'


export const locationsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        [action.location.id]: action.location
      }
    default:
      return state
  }
}
