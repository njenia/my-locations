import { connect } from "react-redux";

import EditCategory from "./view";
import { selectCategory, upsertCategory } from "../../store/entities/category";

const mapStateToProps = (state, { categoryId }) => ({
  category: selectCategory(state, categoryId)
});

const mapDispatchToProps = {
  upsertCategory
};

export const EditCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategory);
