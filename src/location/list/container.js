import { connect } from "react-redux";
import map from "lodash/map";

import ListLocations from "./view";
import {
  resetToolbar,
  setCategoryFilter,
  setGroupByCategory,
  toggleIsSortAscending
} from "./actions";
import { selectCategories } from "../../store/entities/category";
import { getGroupedLocations, selectUngroupedLocations } from "./selectors";

const mapStateToProps = state => {
  const {
    locationsList: { isSortAscending, categoryFilter, isGroupByCategory }
  } = state;
  return {
    locations: selectUngroupedLocations(state, isSortAscending, categoryFilter),
    groupedLocations: getGroupedLocations(state, isGroupByCategory),
    categoryFilterOptions: map(selectCategories(state), ({ id, name }) => ({
      value: id,
      label: name
    })),
    isSortAscending,
    categoryFilter
  };
};

const mapDispatchToProps = {
  onSortDirectionClicked: toggleIsSortAscending,
  onCategoryFilterChange: setCategoryFilter,
  onGroupClicked: setGroupByCategory,
  resetToolbar
};

export const ListLocationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListLocations);
