import React, {useEffect} from "react"
import {withRouter} from "react-router"
import styled from "styled-components"
import Map from "../../common/components/map"
import {createMarkers} from "../../common/utils/map-markers"


export const SingleMap = ({history, locationDetails, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(locationDetails.name, [
      {label: "Map", clickHandler: () => history.push(`/locations/map/${locationDetails.id}`), disabled: true},
      {label: "Details", clickHandler: () => history.push(`/locations/details/${locationDetails.id}`)},
      {label: "Edit", clickHandler: () => history.push(`/locations/edit/${locationDetails.id}`)},
      {label: "Delete", clickHandler: () => history.push(`/locations/delete/${locationDetails.id}`)}
    ])
  }, [])

  return <MapContainer markers={createMarkers([locationDetails])} center={locationDetails.coords}/>;
}

const MapContainer = styled(Map)`
  height: 500px;
  width: 100%;
`

export default withRouter(SingleMap)