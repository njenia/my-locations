import React, {useEffect} from "react"
import {withRouter} from "react-router"

import UpsertCategory from "../common/components/upsert-category-view"

export const EditCategory = ({history, category, upsertCategory, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('Categories', [
      {label: "List", clickHandler: () => history.push('/categories')},
    ])
  }, [])

  return <UpsertCategory initialValues={category} onSubmit={upsertCategory} />
}

export default withRouter(EditCategory)