import { connect } from "react-redux";

import LocationDetails from "./view";
import { selectLocation } from "../../store/entities/location";

const mapStateToProps = (state, { locationId }) => ({
  locationDetails: selectLocation(state, locationId)
});

const mapDispatchToProps = {};

export const LocationDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationDetails);
