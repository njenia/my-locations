import React, {useEffect} from "react"
import List from "@material-ui/core/List/List"
import {withRouter} from "react-router"
import styled from "styled-components"
import Map from "../../common/components/map"


export const ListLocations = ({ history, markers, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('Locations', [
      {label: "List", clickHandler: () => history.push('/locations')},
      {label: "Map", clickHandler: () => history.push('/locations/map')},
      {label: "New", clickHandler: () => history.push('/locations/new')}
    ])
  }, [])

  return <MapContainer markers={markers}/>;
}

const MapContainer = styled(Map)`
  height: 500px;
  width: 100%;
`


export default withRouter(ListLocations)