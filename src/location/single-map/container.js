import {connect} from "react-redux"

import SingleMap from "./view"
import { selectLocation } from "../../store/entities/location";

const mapStateToProps = (state, {
  locationId
}) => {
  const {name, coords} = selectLocation(state, locationId);
  return {
    locationDetails: selectLocation(state, locationId),
    marker: {
      coords: coords,
      title: name
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
