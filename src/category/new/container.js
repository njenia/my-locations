import { connect } from "react-redux";

import NewCategory from "./view";
import { upsertCategory } from "../../store/entities/category";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  upsertCategory
};

export const NewCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCategory);
