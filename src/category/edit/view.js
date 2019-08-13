import React, {useEffect} from "react"
import {withRouter} from "react-router"

import UpsertCategory from "../common/components/upsert-category-view"

export const EditCategory = ({history, category, upsertCategory, onSubmit, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(category.name, [
      {label: "Details", clickHandler: () => history.push(`/categories/details/${category.id}`)},
      {label: "Edit", clickHandler: () => history.push(`/categories/edit/${category.id}`), disabled: true},
      {label: "Delete", clickHandler: () => history.push(`/categories/delete/${category.id}`)}
    ])
  }, [])

  return <UpsertCategory initialValues={category} onSubmit={data => {
    upsertCategory(data);
    onSubmit();
  }} />
}

export default withRouter(EditCategory)