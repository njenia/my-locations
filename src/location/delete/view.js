import React, {useEffect} from "react"
import Typography from "@material-ui/core/Typography/Typography"
import Button from "@material-ui/core/Button/Button"
import {FieldContainer, FormActionContainer, StyledForm} from "../../common/components/styled-form"


export const LocationDetails = ({locationDetails, deleteLocation, onFormSubmit, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('locations.oneSelected', {locationId: locationDetails.id})
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

export default LocationDetails