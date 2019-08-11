import {connect} from "react-redux"
import values from 'lodash/values'
import map from 'lodash/map'

import NewLocation from "./view"
import { selectLocations, addLocation } from "../../store/entities/location";
import {selectCategories} from "../../store/entities/category"

const mapStateToProps = (state) => ({
  locations: selectLocations(state),
  categoryOptions: map(values(selectCategories(state)), ({id, name}) => ({
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
