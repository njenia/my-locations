import { connect } from "react-redux";

import DeleteCategory from "./view";
import { selectCategory, deleteCategory } from "../../store/entities/category";
import { selectLocationsForCategory } from "../../store/entities/location";

const mapStateToProps = (state, { categoryId }) => ({
  categoryDetails: selectCategory(state, categoryId),
  categoryLocations: selectLocationsForCategory(state, categoryId)
});

const mapDispatchToProps = {
  deleteCategory
};

export const DeleteCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategory);
