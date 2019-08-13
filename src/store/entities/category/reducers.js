import {SET_CATEGORY, UNSET_CATEGORY} from './actions'


export const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        [action.category.id]: action.category
      }
    case UNSET_CATEGORY:
      delete state[action.categoryId];
      return state;
    default:
      return state
  }
}
