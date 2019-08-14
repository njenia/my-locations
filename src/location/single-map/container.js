import { connect } from "react-redux";

import SingleMap from "./view";
import { selectLocation } from "../../store/entities/location";

const mapStateToProps = (state, { locationId }) => ({
  locationDetails: selectLocation(state, locationId)
});

const mapDispatchToProps = {};

export const SingleMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMap);
