import {connect} from "react-redux"

import ListCategories from "./view"
import { selectCategories } from "../../store/entities/category";

const mapStateToProps = (state) => ({
  categories: selectCategories(state)
})

const mapDispatchToProps = {}

export const ListCategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCategories)
