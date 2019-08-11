export const selectCategories = ({entities: {categories}}) => categories
export const selectCategory = (state, categoryId) => state.entities.categories[categoryId]