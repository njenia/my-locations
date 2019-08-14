import {
  externalDeleteCategory,
  persistCategory
} from "../../../common/utils/external-storage-api";

export const SET_CATEGORY = "CATEGORY/SET";
export const UNSET_CATEGORY = "CATEGORY/DELETE";

export function setCategory({ categoryId, category }) {
  return {
    type: SET_CATEGORY,
    categoryId,
    category
  };
}

export function unsetCategory({ categoryId }) {
  return {
    type: UNSET_CATEGORY,
    categoryId
  };
}

export function upsertCategory(category) {
  return async dispatch => {
    const categoryId = persistCategory(category);
    return dispatch(
      setCategory({
        categoryId,
        category
      })
    );
  };
}

export function deleteCategory(categoryId) {
  return async dispatch => {
    externalDeleteCategory(categoryId);
    return dispatch(
      unsetCategory({
        categoryId
      })
    );
  };
}
