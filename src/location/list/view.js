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
  const [selectedLocationId, setSelectedLocationId] = useState(null)

  useEffect(() => {
    updateActionMenu('locations.noneSelected')
    return () => {
      resetToolbar()
    }
  }, [])

  const onLocationSelected = locationId => {
    if (selectedLocationId === locationId) {
      setSelectedLocationId(null)
      updateActionMenu('locations.noneSelected')
    } else {
      setSelectedLocationId(locationId)
      updateActionMenu('locations.oneSelected', {locationId: locationId})
    }
  }

  if (isEmpty(locations) && !categoryFilter) {
    return <NoDataContainer><Typography variant="h5">No locations yet :(</Typography></NoDataContainer>
  }

  const nonGroupedView = (isEmpty(locations) && categoryFilter) ?
    <Typography variantf="body1">No locations in this filter</Typography> :
    <LocationsList locations={locations}
                   onLocationSelected={onLocationSelected}
                   showCategoryLabel
                   selectedLocationId={selectedLocationId}
    />

  const groupedView = map(toPairs(groupedLocations), ([categoryName, categoryLocations]) => (
    <React.Fragment>
      <Typography variant="h6">
        {categoryName}
      </Typography>
      <LocationsList locations={categoryLocations}
                     onLocationSelected={onLocationSelected}
                     selectedLocationId={selectedLocationId}
      />
    </React.Fragment>
  ));

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
          groupedView
      }
    </React.Fragment>
  )
}

const LocationsList = ({locations, selectedLocationId, onLocationSelected, showCategoryLabel}) => {
  return (
    <List component="nav">
      {
        map(values(locations), location => (
          <ListItem button selected={location.id === selectedLocationId} key={location.id}
                    onClick={() => onLocationSelected(location.id)}>
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