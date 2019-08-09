import React from 'react'
import {withRouter} from "react-router-dom"
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import CategoryIcon from '@material-ui/icons/Category'

const MainNavigation = ({history}) => {
  return (
    <BottomNavigation onChange={(event, newValue) => history.push(newValue)}>
      <BottomNavigationAction value="locations" icon={<LocationOnIcon fontSize="large"/>}/>
      <BottomNavigationAction value="categories" icon={<CategoryIcon fontSize="large"/>}/>
    </BottomNavigation>
  )
}

export default withRouter(MainNavigation)
