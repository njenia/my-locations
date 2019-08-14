import React, {useEffect, useState} from "react"
import values from 'lodash/mapValues'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"
import List from "@material-ui/core/List/List"
import ListItem from "@material-ui/core/ListItem/ListItem"
import CategoryIcon from '@material-ui/icons/Category'
import Typography from "@material-ui/core/Typography/Typography"
import NoDataContainer from "../../common/components/no-data-container"

export const ListCategories = ({categories, onCategoryClicked, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('categories.noneSelected')
  }, [])
  
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)

  const onCategorySelected = categoryId => {
    if (selectedCategoryId === categoryId) {
      setSelectedCategoryId(null)
      updateActionMenu('categories.noneSelected')
    } else {
      setSelectedCategoryId(categoryId)
      updateActionMenu('categories.oneSelected', {categoryId: categoryId})
    }
  }
  return (
    isEmpty(categories) ?
      <NoDataContainer><Typography variant="h5">No categories yet :(</Typography></NoDataContainer> :
      <List component="nav">
        {
          map(values(categories), category => (
            <ListItem button selected={category.id === selectedCategoryId} key={category.id} onClick={() => onCategorySelected(category.id)}>
              <ListItemIcon>
                <CategoryIcon/>
              </ListItemIcon>
              <ListItemText primary={category.name} secondary={getCategorySubtitle(category)}/>
            </ListItem>
          ))
        }
      </List>
  )
}

const getCategorySubtitle = ({locationsCount}) => {
  switch (locationsCount) {
    case 0:
      return "No locations"
    case 1:
      return "1 location"
    default:
      return `${locationsCount} locations`
  }
}

export default ListCategories