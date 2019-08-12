import React, {useEffect} from "react"
import Typography from "@material-ui/core/Typography/Typography"
import {withRouter} from "react-router"
import Button from "@material-ui/core/Button/Button"
import map from 'lodash/map'

export const CategoryDetails = ({history, categoryLocations, categoryDetails, onClick, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(categoryDetails.name, [
      {label: "Map", clickHandler: () => history.push(`/categories/map/${categoryDetails.id}`)},
      {label: "Edit", clickHandler: () => history.push(`/categories/edit/${categoryDetails.id}`)},
      {label: "Delete", clickHandler: () => history.push(`/categories/delete/${categoryDetails.id}`)}
    ])
  }, [])

  const handleClick = () => {
    onClick(categoryDetails.id)
    history.push(`/categories`)
  }

  return (
    <React.Fragment>
      {
        categoryLocations ?
          <Typography variant="body1" color="inherit">There are locations in the
            category <strong>{categoryDetails.name}</strong>. Please delete them first:
            {map(categoryLocations, ({id, name}) => <div key={id}>{name}</div>)}
          </Typography> :
          <React.Fragment>
            <Typography variant="body1" color="inherit">
              Are you sure you want to delete the category "{categoryDetails.name}"?
            </Typography>
            < Button onClick={handleClick}>OK</Button>
          </React.Fragment>
      }
    </React.Fragment>
  )
}

export default withRouter(CategoryDetails)