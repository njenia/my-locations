import { connect } from "react-redux";

import ListCategories from "./view";
import { selectCategoriesWithLocationCount } from "../../store/entities/category";

const mapStateToProps = state => ({
  categories: selectCategoriesWithLocationCount(state)
});

const mapDispatchToProps = {};

export const ListCategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCategories);
