export const TOGGLE_IS_SORT_ASCENDING = 'LOCATIONS_LIST/TOGGLE_IS_SORT_ASCENDING'
export const SET_CATEGORY_FILTER = 'LOCATIONS_LIST/SET_CATEGORY_FILTER'
export const TOGGLE_GROUP_BY_CATEGORY = 'LOCATIONS_LIST/TOGGLE_GROUP_BY_CATEGORY'

export const toggleIsSortAscending = () => ({
  type: TOGGLE_IS_SORT_ASCENDING
})

export const setCategoryFilter = (categoryId) => ({
  type: SET_CATEGORY_FILTER,
  categoryId
})

export const toggleGroupByCategory = () => ({
  type: TOGGLE_GROUP_BY_CATEGORY
})
