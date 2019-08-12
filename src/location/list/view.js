import React, {useEffect, useState} from "react"
import values from 'lodash/mapValues'
import map from 'lodash/map'
import toPairs from 'lodash/toPairs'
import isEmpty from 'lodash/isEmpty'
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"
import List from "@material-ui/core/List/List"
import ListItem from "@material-ui/core/ListItem/ListItem"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import {withRouter} from "react-router"
import LocationsListToolbar from "./components/locations-list-toolbar"
import Typography from "@material-ui/core/Typography/Typography"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"


export const ListLocations = ({
                                history, locations, onLocationClicked, updateActionMenu, isSortAscending,
                                onSortDirectionClicked, categoryFilterOptions, categoryFilter, onCategoryFilterChange, onGroupClicked,
                                groupedLocations
                              }) => {
  useEffect(() => {
    updateActionMenu('Locations', [
      {label: "List", clickHandler: () => history.push('/locations')},
      {label: "Map", clickHandler: () => history.push('/locations/map')},
      {label: "New", clickHandler: () => history.push('/locations/new')}
    ])
  }, [])

  return (
    <React.Fragment>
      <LocationsListToolbar isSortAscending={isSortAscending}
                          categoryFilterOptions={categoryFilterOptions}
                          onCategoryFilterChange={onCategoryFilterChange}
                          onGroupClicked={onGroupClicked}
                          onSortDirectionClicked={onSortDirectionClicked}
      />
      {
        !isEmpty(groupedLocations) ? map(toPairs(groupedLocations), ([categoryName, categoryLocations]) => (
          <React.Fragment>
            <Typography variant="h6" color="inherit">
              {categoryName}
            </Typography>
            <LocationsList locations={categoryLocations} onLocationClicked={onLocationClicked}/>
          </React.Fragment>
        )) : <LocationsList locations={locations} onLocationClicked={onLocationClicked}/>
      }
    </React.Fragment>
  )
}

const LocationsList = ({locations, onLocationClicked}) => (
  <List component="nav">
    {
      map(values(locations), location => (
        <ListItem button key={location.id} onClick={() => onLocationClicked(location.id)}>
          <ListItemIcon>
            <LocationOnIcon/>
          </ListItemIcon>
          <ListItemText primary={location.name} secondary={location.category.name}/>
        </ListItem>
      ))
    }
  </List>
)

export default withRouter(ListLocations)