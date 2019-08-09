import {persistNewCategory} from "../../../common/utils/external-storage-api"

export const SET_CATEGORY= 'CATEGORY/SET'

export function setCategory({ categoryId, category }) {
  return {
    type: SET_CATEGORY,
    categoryId,
    category
  }
}

export function addCategory(category) {
  return async dispatch => {
    const categoryId = persistNewCategory(category)
    return dispatch(setCategory({
      categoryId,
      category
    }))
  }
}
