import {connect} from "react-redux"

import NewCategory from "./view"
import { addCategory } from "../../store/entities/category";

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = {
  addCategory
}

export const NewCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCategory)
