import { connect } from "react-redux";

import CategoryDetails from "./view";
import { selectCategory } from "../../store/entities/category";
import { selectLocationsForCategory } from "../../store/entities/location";

const mapStateToProps = (state, { categoryId }) => ({
  categoryDetails: selectCategory(state, categoryId),
  categoryLocations: selectLocationsForCategory(state, categoryId)
});

const mapDispatchToProps = {};

export const CategoryDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetails);
