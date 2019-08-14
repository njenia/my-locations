import React, {useEffect} from "react"
import Typography from "@material-ui/core/Typography/Typography"
import Button from "@material-ui/core/Button/Button"
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import values from "lodash/mapValues"
import ListItem from "@material-ui/core/ListItem/ListItem"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import {FieldContainer, FormActionContainer, StyledForm} from "../../common/components/styled-form"

export const CategoryDetails = ({categoryLocations, categoryDetails, onSubmit, deleteCategory, onLocationClicked, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('categories.oneSelected', {categoryId: categoryDetails.id})
  }, [])

  const handleClick = () => {
    deleteCategory(categoryDetails.id);
    onSubmit();
  }

  return (
    <React.Fragment>
      {
        !isEmpty(categoryLocations) ?
          <React.Fragment>
            <Typography variant="body1">There are locations in
              category <strong>{categoryDetails.name}</strong>. To delete this category you need to delete these
              locations first: </Typography>
            {
              map(values(categoryLocations), location => (
                <ListItem button key={location.id} onClick={() => onLocationClicked(location.id)}>
                  <ListItemText primary={location.name}/>
                </ListItem>
              ))
            }
          </React.Fragment> :
          <StyledForm>
            <FieldContainer>
              <Typography variant="body1">
                Are you sure you want to delete the category <strong>{categoryDetails.name}</strong>?
              </Typography>
            </FieldContainer>
            <FormActionContainer>
              <Button onClick={handleClick} variant="contained" color="secondary">OK</Button>
            </FormActionContainer>
          </StyledForm>
      }
    </React.Fragment>
  )
}

export default CategoryDetails