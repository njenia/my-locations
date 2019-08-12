import {connect} from "react-redux"

import DeleteLocation from "./view"
import { selectLocation, deleteLocation } from "../../store/entities/location";

const mapStateToProps = (state, {
  locationId
}) => ({
  locationDetails: selectLocation(state, locationId)
})


const mapDispatchToProps = {
  onClick: deleteLocation
}

export const DeleteLocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteLocation)
