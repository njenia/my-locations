import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import size from "lodash/size";
import { EntityTitle } from "../../common/components/entity-details";
import values from "lodash/mapValues";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

export const CategoryDetails = ({
  categoryDetails,
  categoryLocations,
  onLocationClicked,
  updateActionMenu
}) => {
  useEffect(() => {
    updateActionMenu("categories.oneSelected", {
      categoryId: categoryDetails.id
    });
  }, []);

  return (
    <React.Fragment>
      <EntityTitle title={categoryDetails.name} />

      {isEmpty(categoryLocations) ? (
        <Typography variant="h6">No locations in category</Typography>
      ) : (
        <CategoryLocationsList
          categoryLocations={categoryLocations}
          onLocationClicked={onLocationClicked}
        />
      )}
    </React.Fragment>
  );
};

const CategoryLocationsList = ({ categoryLocations, onLocationClicked }) => (
  <React.Fragment>
    <Typography variant="h6">
      {size(categoryLocations)} location
      {size(categoryLocations) !== 1 && "s"} in this category:
    </Typography>
    {map(values(categoryLocations), location => (
      <ListItem
        button
        key={location.id}
        onClick={() => onLocationClicked(location.id)}
      >
        <ListItemText primary={location.name} />
      </ListItem>
    ))}
  </React.Fragment>
);

export default CategoryDetails;
