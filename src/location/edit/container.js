import { connect } from "react-redux";
import map from "lodash/map";
import values from "lodash/values";

import EditLocation from "./view";
import { selectLocation, upsertLocation } from "../../store/entities/location";
import { selectCategories } from "../../store/entities/category";

const mapStateToProps = (state, { locationId }) => ({
  locationData: selectLocation(state, locationId),
  categoryOptions: map(values(selectCategories(state)), ({ id, name }) => ({
    value: id,
    label: name
  }))
});

const mapDispatchToProps = {
  upsertLocation
};

export const EditLocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLocation);
