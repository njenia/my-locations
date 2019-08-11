import {connect} from "react-redux"

import CategoryDetails from "./view"
import { selectCategory } from "../../store/entities/category";

const mapStateToProps = (state, {
  categoryId
}) => ({
  categoryDetails: selectCategory(state, categoryId)
})


const mapDispatchToProps = {}

export const CategoryDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetails)
