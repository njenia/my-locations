import { TOGGLE_IS_SORT_ASCENDING, SET_CATEGORY_FILTER, TOGGLE_GROUP_BY_CATEGORY } from './actions'

const initialState = {
  isSortAscending: true,
  categoryFilter: null,
  isGroupByCategory: false
}

export const locationsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_SORT_ASCENDING:
      return {
        ...state,
        isSortAscending: !state.isSortAscending
      }
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.categoryId
      }
    case TOGGLE_GROUP_BY_CATEGORY:
      return {
        ...state,
        isGroupByCategory: !state.isGroupByCategory
      }
    default:
      return state
  }
}
