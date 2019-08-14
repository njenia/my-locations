import React, {useEffect} from "react"

import UpsertCategory from "../common/components/upsert-category-view"

export const EditCategory = ({history, category, upsertCategory, onSubmit, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('categories.oneSelected', {categoryId: category.id})
  }, [])

  return <UpsertCategory initialValues={category} onSubmit={data => {
    upsertCategory(data);
    onSubmit();
  }} />
}

export default EditCategory