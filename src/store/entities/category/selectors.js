import map from 'lodash/map'
import size from 'lodash/size'
import {selectLocationsForCategory} from "../location"

export const selectCategories = ({entities: {categories}}) => categories
export const selectCategory = (state, categoryId) => state.entities.categories[categoryId]
export const selectCategoriesWithLocationCount = (state) => map(selectCategories(state), category => ({
  ...category,
  locationsCount: size(selectLocationsForCategory(state, category.id))
}))