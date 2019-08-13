import React, {useEffect} from "react"
import Typography from "@material-ui/core/Typography/Typography"
import {withRouter} from "react-router"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Button from "@material-ui/core/Button/Button"
import {FieldContainer, FormActionContainer, StyledForm} from "../../common/components/styled-form"


export const LocationDetails = ({history, locationDetails, deleteLocation, onFormSubmit, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(locationDetails.name, [
      {label: "Map", clickHandler: () => history.push(`/locations/map/${locationDetails.id}`)},
      {label: "Details", clickHandler: () => history.push(`/locations/details/${locationDetails.id}`)},
      {label: "Edit", clickHandler: () => history.push(`/locations/edit/${locationDetails.id}`)},
      {label: "Delete", clickHandler: () => history.push(`/locations/delete/${locationDetails.id}`), disabled: true}
    ])
  }, [])

  const handleClick = () => {
    deleteLocation(locationDetails.id);
    onFormSubmit();
  }

  return (
    <StyledForm>
      <FieldContainer>
        <Typography variant="body1">
          Are you sure you want to delete the location <strong>{locationDetails.name}</strong>?
        </Typography>
      </FieldContainer>
      <FormActionContainer>
        <Button onClick={handleClick} variant="contained" color="secondary">OK</Button>
      </FormActionContainer>
    </StyledForm>
  )
}

export default withRouter(LocationDetails)