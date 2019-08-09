import {connect} from "react-redux"
import orderBy from 'lodash/orderBy'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import filter from 'lodash/filter'

import ListLocations from "./view"
import { getLocations } from "../../store/entities/location";
import { toggleIsSortAscending, setCategoryFilter, toggleGroupByCategory } from "./actions"
import { getCategories } from "../../store/entities/category"

const mapStateToProps = ({
  entities: { locations, categories },
  locationsList: { isSortAscending, categoryFilter, isGroupByCategory }
}) => ({
  locations: preparedLocations(getLocations(locations, categories), isSortAscending, categoryFilter),
  groupedLocations: prepareGroupedLocations(getLocations(locations, categories), isSortAscending, categoryFilter, isGroupByCategory),
  isSortAscending,
  categoryFilterOptions: map(getCategories(categories), ({ id, name }) => ({
    value: id,
    label: name
  })),
  categoryFilter
})

const mapDispatchToProps = {
  onSortDirectionClicked: toggleIsSortAscending,
  onCategoryFilterChange: setCategoryFilter,
  onGroupClicked: toggleGroupByCategory
}

const prepareGroupedLocations = (locationEntities, isSortAscending, categoryFilter, isGroupByCategory) => {
  return isGroupByCategory && groupBy(locationEntities, ({ category: { id } }) => id)
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
