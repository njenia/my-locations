import {connect} from "react-redux"

import ListCategories from "./view"
import { getCategories } from "../../store/entities/category";

const mapStateToProps = ({
  entities: { categories }
}) => ({
  categories: getCategories(categories)
})

const mapDispatchToProps = {}

export const ListCategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCategories)
