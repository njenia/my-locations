import {connect} from "react-redux"

import SingleMap from "./view"
import { getLocation } from "../../store/entities/location";

const mapStateToProps = ({
  entities: { locations }
}, {
  locationId
}) => {
  return {
    locationDetails: getLocation(locations, locationId),
    marker: {
      coords: getLocation(locations, locationId).coords,
      title: getLocation(locations, locationId).name
    }
  }
}


const mapDispatchToProps = ({

}) => ({

})

export const SingleMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMap)
