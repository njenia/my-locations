export const TOGGLE_IS_SORT_ASCENDING =
  "LOCATIONS_LIST/TOGGLE_IS_SORT_ASCENDING";
export const SET_IS_SORT_ASCENDING = "LOCATIONS_LIST/SET_IS_SORT_ASCENDING";
export const SET_CATEGORY_FILTER = "LOCATIONS_LIST/SET_CATEGORY_FILTER";
export const SET_GROUP_BY_CATEGORY = "LOCATIONS_LIST/SET_GROUP_BY_CATEGORY";

export const toggleIsSortAscending = () => ({
  type: TOGGLE_IS_SORT_ASCENDING
});

export const setIsSortAscending = isSortAscending => ({
  type: SET_IS_SORT_ASCENDING,
  isSortAscending
});

export const setCategoryFilter = categoryId => ({
  type: SET_CATEGORY_FILTER,
  categoryId
});

export const setGroupByCategory = isGroupByCategory => ({
  type: SET_GROUP_BY_CATEGORY,
  isGroupByCategory
});

export function resetToolbar() {
  return async dispatch => {
    dispatch(setIsSortAscending(true));
    dispatch(setCategoryFilter(null));
    dispatch(setGroupByCategory(false));
  };
}
