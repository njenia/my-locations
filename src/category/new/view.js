import React, {useEffect} from "react"
import {withRouter} from "react-router"

import UpsertCategory from "../common/components/upsert-category-view"

export const NewCategory = ({history, upsertCategory, onSubmit, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('Categories', [
      {label: "List", clickHandler: () => history.push('/categories')},
      {label: "New", clickHandler: () => history.push('/categories/new'), disabled: true}
    ])
  }, [])

  return <UpsertCategory upsertCategory={upsertCategory} onSubmit={data => {
    upsertCategory(data);
    onSubmit();
  }} />
}

export default withRouter(NewCategory)