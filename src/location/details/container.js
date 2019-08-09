import {connect} from "react-redux"

import LocationDetails from "./view"
import { getLocation } from "../../store/entities/location";

const mapStateToProps = ({
  entities: { locations }
}, {
  locationId
}) => ({
  locationDetails: getLocation(locations, locationId)
})


const mapDispatchToProps = ({

}) => ({

})

export const LocationDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationDetails)
