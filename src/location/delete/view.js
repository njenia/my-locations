import React, {useEffect} from "react"
import Typography from "@material-ui/core/Typography/Typography"
import {withRouter} from "react-router"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Button from "@material-ui/core/Button/Button"


export const LocationDetails = ({history, locationDetails, onClick, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(locationDetails.name, [
      {label: "Map", clickHandler: () => history.push(`/locations/map/${locationDetails.id}`)},
      {label: "Edit", clickHandler: () => history.push(`/locations/edit/${locationDetails.id}`)},
      {label: "Delete", clickHandler: () => history.push(`/locations/delete/${locationDetails.id}`)}
    ])
  }, [])

  const handleClick = () => {
    onClick(locationDetails.id);
    history.push(`/locations`)
  }

  return (
    <React.Fragment>
      <Typography variant="body1" color="inherit">
        Are you sure you want to delete the location "{locationDetails.name}"?
      </Typography>
      <Button onClick={handleClick}>OK</Button>
    </React.Fragment>
  )
}

export default withRouter(LocationDetails)