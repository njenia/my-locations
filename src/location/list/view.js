import React, {useEffect, useState} from "react"
import values from 'lodash/mapValues'
import map from 'lodash/map'
import toPairs from 'lodash/toPairs'
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"
import List from "@material-ui/core/List/List"
import ListItem from "@material-ui/core/ListItem/ListItem"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import styled from 'styled-components'
import {withRouter} from "react-router"

import Select from "../../common/components/select"
import Checkbox from "../../common/components/checkbox"

const SortDirectionIcon = ({isSortAscending, onSortDirectionClicked}) => (
  <div onClick={onSortDirectionClicked}>
    {isSortAscending ? <ArrowDropDownIcon fontSize="large"/> :
      <ArrowDropUpIcon fontSize="large"/>}
  </div>
)

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
      <ListToolbar>
        <div>Sort by: Location name</div>
        <SortDirectionIcon isSortAscending={isSortAscending} onSortDirectionClicked={onSortDirectionClicked}/>
        |
        <div>Filter by category:</div>
        <Select options={categoryFilterOptions} handleChange={onCategoryFilterChange} />
        |
        <Checkbox label="Group by category" handleChange={onGroupClicked} />
      </ListToolbar>
      {
        groupedLocations && map(toPairs(groupedLocations), categoryGroup => (
          <React.Fragment>
            <strong>{categoryGroup[0]}</strong>
            {
              map(categoryGroup[1], location => (
              <ListItem button key={location.id} onClick={() => onLocationClicked(location.id)}>
                <ListItemIcon>
                  <LocationOnIcon/>
                </ListItemIcon>
                <ListItemText primary={location.name} secondary={location.category.name}/>
              </ListItem>
            ))
            }
          </React.Fragment>
        ))
      }
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
    </React.Fragment>
  )
}

const ListToolbar = styled.div`
  display: flex;
  
`

export default withRouter(ListLocations)