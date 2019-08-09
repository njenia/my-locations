import {connect} from "react-redux"

import LocationsMap from "./view"
import { getLocations } from "../../store/entities/location";
import map from "lodash/map"
import values from "lodash/values"

const mapStateToProps = ({
  entities: { locations, categories }
}) => ({
  markers: map(values(getLocations(locations, categories)), ({coords, name}) => ({
    coords,
    title: name
  }))
})

const mapDispatchToProps = {}

export const LocationsMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsMap)
