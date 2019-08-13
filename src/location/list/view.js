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
import NoDataContainer from "../../common/components/no-data-container"


export const ListLocations = ({
  history,
  locations,
  onLocationClicked,
  updateActionMenu,
  isSortAscending,
  onSortDirectionClicked,
  categoryFilterOptions,
  categoryFilter,
  onCategoryFilterChange,
  onGroupClicked,
  groupedLocations,
  resetToolbar
}) => {
  const generalActionsConfig = [
    {label: "List", clickHandler: () => history.push('/locations'), disabled: true},
    {label: "New", clickHandler: () => history.push('/locations/new')}
  ]
  useEffect(() => {
    updateActionMenu('Locations', generalActionsConfig)
    return () => {
      resetToolbar()
    }
  }, [])

  const locationSelected = location => {
    if (location) {
      updateActionMenu(location.name, [
        {label: "Details", clickHandler: () => history.push(`/locations/details/${location.id}`)},
        {label: "Map", clickHandler: () => history.push(`/locations/map/${location.id}`)},
        {label: "Edit", clickHandler: () => history.push(`/locations/edit/${location.id}`)},
        {label: "Delete", clickHandler: () => history.push(`/locations/delete/${location.id}`)},
      ])
    } else {
      updateActionMenu('Locations', generalActionsConfig)
    }
  }

  if (isEmpty(locations) && !categoryFilter) {
    return <NoDataContainer><Typography variant="h5">No locations yet :(</Typography></NoDataContainer>
  }

  const nonGroupedView = (isEmpty(locations) && categoryFilter) ?
    <Typography variant="body1">No locations in this filter</Typography> :
    <LocationsList locations={locations} onLocationSelected={locationSelected} showCategoryLabel/>

  return (
    <React.Fragment>
      <LocationsListToolbar isSortAscending={isSortAscending}
                            categoryFilterOptions={categoryFilterOptions}
                            onCategoryFilterChange={onCategoryFilterChange}
                            onGroupClicked={onGroupClicked}
                            onSortDirectionClicked={onSortDirectionClicked}
                            isGroupedLocations={!isEmpty(groupedLocations)}
      />
      {
        isEmpty(groupedLocations) ?
          nonGroupedView :
          map(toPairs(groupedLocations), ([categoryName, categoryLocations]) => (
            <React.Fragment>
              <Typography variant="h6">
                {categoryName}
              </Typography>
              <LocationsList locations={categoryLocations} onLocationSelected={locationSelected}/>
            </React.Fragment>
          ))
      }
    </React.Fragment>
  )
}

const LocationsList = ({locations, onLocationSelected, showCategoryLabel}) => {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <List component="nav">
      {
        map(values(locations), location => (
          <ListItem button selected={location.id === selectedId} key={location.id} onClick={() => {
            if (selectedId === location.id) {
              setSelectedId(null)
              onLocationSelected(null)
            } else {
              setSelectedId(location.id)
              onLocationSelected(location)
            }
          }}>
            <ListItemIcon>
              <LocationOnIcon/>
            </ListItemIcon>
            <ListItemText primary={location.name} secondary={showCategoryLabel && location.category.name}/>
          </ListItem>
        ))
      }
    </List>
  )
}

export default withRouter(ListLocations)