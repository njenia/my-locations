import orderBy from "lodash/orderBy";
import filter from "lodash/filter";
import { selectLocations } from "../../store/entities/location";
import groupBy from "lodash/groupBy";

export const selectUngroupedLocations = (
  state,
  isSortAscending,
  categoryFilter
) => {
  const locations = selectLocations(state);
  const orderedLocations = orderBy(
    locations,
    ["name"],
    [isSortAscending ? "asc" : "desc"]
  );
  if (categoryFilter) {
    return filter(
      orderedLocations,
      ({ category: { id } }) => id === categoryFilter
    );
  }
  return orderedLocations;
};

export const getGroupedLocations = (state, isGroupByCategory) => {
  const locations = selectLocations(state);
  return isGroupByCategory && groupBy(locations, "category.name");
};
