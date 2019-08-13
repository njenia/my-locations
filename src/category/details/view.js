import React, {useEffect} from "react"
import Typography from "@material-ui/core/Typography/Typography"
import {withRouter} from "react-router"
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import {Link} from "react-router-dom"
import {EntityTitle} from "../../common/components/entity-details"
import values from "lodash/mapValues"
import ListItem from "@material-ui/core/ListItem/ListItem"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"

export const CategoryDetails = ({history, categoryDetails, categoryLocations, onLocationClicked, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(categoryDetails.name, [
      {label: "Details", clickHandler: () => history.push(`/categories/details/${categoryDetails.id}`), disabled: true},
      {label: "Edit", clickHandler: () => history.push(`/categories/edit/${categoryDetails.id}`)},
      {label: "Delete", clickHandler: () => history.push(`/categories/delete/${categoryDetails.id}`)}
    ])
  }, [])

  return (
    <React.Fragment>
      <EntityTitle title={categoryDetails.name}/>

      {
        isEmpty(categoryLocations) ? <Typography variant="h6">
          No locations in category
        </Typography> : <CategoryLocationsList categoryLocations={categoryLocations} onLocationClicked={onLocationClicked} />
      }
    </React.Fragment>
  )
}

const CategoryLocationsList = ({categoryLocations, onLocationClicked}) => (
  <React.Fragment>
    <Typography variant="h6">
      {size(categoryLocations)} location{size(categoryLocations) !== 1 && 's'} in this category:
    </Typography>
    {
      map(values(categoryLocations), location => (
        <ListItem button key={location.id} onClick={() => onLocationClicked(location.id)}>
          <ListItemText primary={location.name}/>
        </ListItem>
      ))
    }
  </React.Fragment>
)

export default withRouter(CategoryDetails)