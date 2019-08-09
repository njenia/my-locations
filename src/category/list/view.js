import React, {useEffect} from "react"
import values from 'lodash/mapValues'
import map from 'lodash/map'
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"
import List from "@material-ui/core/List/List"
import ListItem from "@material-ui/core/ListItem/ListItem"
import CategoryIcon from '@material-ui/icons/Category'
import {withRouter} from "react-router"


export const ListCategories = ({history, categories, onCategoryClicked, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('Categories', [
      {label: "List", clickHandler: () => history.push('/categories')},
      {label: "New", clickHandler: () => history.push('/categories/new')}
    ])
  }, [])
  return (
    <List component="nav">
      {
        map(values(categories), category => (
          <ListItem button key={category.id} onClick={() => onCategoryClicked(category.id)}>
            <ListItemIcon>
              <CategoryIcon/>
            </ListItemIcon>
            <ListItemText primary={category.name} secondary={category.address}/>
          </ListItem>
        ))
      }
    </List>
  )
}

export default withRouter(ListCategories);