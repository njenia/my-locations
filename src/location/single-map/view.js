import React, {useEffect} from "react"
import Typography from "@material-ui/core/Typography/Typography"
import {withRouter} from "react-router"
import styled from "styled-components"
import Map from "../../common/components/map"


export const SingleMap = ({history, locationDetails, marker, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(locationDetails.name, [
      {label: "Edit", clickHandler: () => history.push(`/locations/edit/${locationDetails.id}`)}
    ])
  }, [])

  return <MapContainer markers={[marker]}/>;
}

const MapContainer = styled(Map)`
  height: 90%;
  width: 80%;
`

export default withRouter(SingleMap)