import {connect} from "react-redux"

import LocationsMap from "./view"
import { selectLocations } from "../../store/entities/location";
import map from "lodash/map"
import values from "lodash/values"

const mapStateToProps = (state) => ({
  markers: map(values(selectLocations(state)), ({coords, name}) => ({
    coords,
    title: name
  }))
})

const mapDispatchToProps = {}

export const LocationsMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsMap)
