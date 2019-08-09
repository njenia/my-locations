import {SET_CATEGORY} from './actions'


export const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        [action.category.id]: action.category
      }
    default:
      return state
  }
}
