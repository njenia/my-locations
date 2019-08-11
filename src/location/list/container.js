import {connect} from "react-redux"
import orderBy from 'lodash/orderBy'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import filter from 'lodash/filter'

import ListLocations from "./view"
import { toggleIsSortAscending, setCategoryFilter, toggleGroupByCategory } from "./actions"
import { selectCategories } from "../../store/entities/category"
import { selectLocations } from "../../store/entities/location"

const mapStateToProps = (state) => {
  const {locationsList: {isSortAscending, categoryFilter, isGroupByCategory}} = state;
  return {
    locations: preparedLocations(selectLocations(state), isSortAscending, categoryFilter),
    groupedLocations: prepareGroupedLocations(selectLocations(state), isSortAscending, categoryFilter, isGroupByCategory),
    isSortAscending,
    categoryFilterOptions: map(selectCategories(state), ({ id, name }) => ({
      value: id,
      label: name
    })),
    categoryFilter
  }
}

const mapDispatchToProps = {
  onSortDirectionClicked: toggleIsSortAscending,
  onCategoryFilterChange: setCategoryFilter,
  onGroupClicked: toggleGroupByCategory
}

const prepareGroupedLocations = (locationEntities, isSortAscending, categoryFilter, isGroupByCategory) => {
  return isGroupByCategory && groupBy(locationEntities, 'category.name')
}

const preparedLocations = (locationEntities, isSortAscending, categoryFilter) => {
  const locations = orderBy(locationEntities, ['name'], [isSortAscending ? 'asc' : 'desc']);
  if (categoryFilter) {
    return filter(locations, ({ category: { id } }) => id === categoryFilter)
  }
  return locations
}

export const ListLocationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListLocations)
