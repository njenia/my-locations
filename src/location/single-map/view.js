import React, {useEffect} from "react"
import styled from "styled-components"
import Map from "../../common/components/map"
import {createMarkers} from "../../common/utils/map-markers"
import {Typography} from "@material-ui/core"


export const SingleMap = ({locationDetails, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('locations.oneSelected', {locationId: locationDetails.id})
  }, [])

  return <React.Fragment>
    <MapTitleContainer>
      <Typography variant="h4">
        {locationDetails.name}
      </Typography>
    </MapTitleContainer>
    <MapContainer markers={createMarkers([locationDetails])} center={locationDetails.coords}/>;
  </React.Fragment>
}

const MapContainer = styled(Map)`
  height: 500px;
  width: 100%;
`

const MapTitleContainer = styled.div`
  margin-bottom: 15px;
`

export default SingleMap