import React, {useEffect} from "react"
import Typography from "@material-ui/core/Typography/Typography"
import {withRouter} from "react-router"


export const CategoryDetails = ({history, categoryDetails, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(categoryDetails.name, [
      {label: "Edit", clickHandler: () => history.push(`/categories/edit/${categoryDetails.id}`)}
    ])
  }, [])

  return (
    <React.Fragment>
      <Typography variant="h4" color="inherit">
        {categoryDetails.name}
      </Typography>
      <Typography variant="h5" color="inherit">
        {categoryDetails.id}
      </Typography>
    </React.Fragment>
  )
}

export default withRouter(CategoryDetails)