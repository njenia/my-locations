import React, {useEffect} from "react"
import Typography from "@material-ui/core/Typography/Typography"
import {withRouter} from "react-router"


export const LocationDetails = ({history, locationDetails, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(locationDetails.name, [
      {label: "Map", clickHandler: () => history.push(`/locations/map/${locationDetails.id}`)},
      {label: "Edit", clickHandler: () => history.push(`/locations/edit/${locationDetails.id}`)}
    ])
  }, [])

  return (
    <React.Fragment>
      <Typography variant="h4" color="inherit">
        {locationDetails.name}
      </Typography>
      <Typography variant="h5" color="inherit">
        {locationDetails.id}
      </Typography>
      <Typography variant="h5" color="inherit">
        {locationDetails.address}
      </Typography>
      <Typography variant="h5" color="inherit">
        {locationDetails.category.name}
      </Typography>
    </React.Fragment>
  )
}

export default withRouter(LocationDetails)