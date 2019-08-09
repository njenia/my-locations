import {connect} from "react-redux"
import values from 'lodash/values'
import map from 'lodash/map'

import NewLocation from "./view"
import { getLocations, addLocation } from "../../store/entities/location";
import {getCategories} from "../../store/entities/category"

const mapStateToProps = ({
  entities: { locations, categories }
}) => ({
  locations: getLocations(locations, categories),
  categoryOptions: map(values(getCategories(categories)), ({id, name}) => ({
    value: id,
    label: name
  }))
})

const mapDispatchToProps = {
  addLocation
}

export const NewLocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewLocation)
