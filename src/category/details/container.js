import {connect} from "react-redux"

import CategoryDetails from "./view"
import { getCategory } from "../../store/entities/category";

const mapStateToProps = ({
  entities: { categories }
}, {
  categoryId
}) => ({
  categoryDetails: getCategory(categories, categoryId)
})


const mapDispatchToProps = ({

}) => ({

})

export const CategoryDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetails)
