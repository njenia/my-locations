import React, { useEffect } from "react";
import { withRouter } from "react-router";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";

import {
  EntityTitle,
  EntityDetail
} from "../../common/components/entity-details";

export const LocationDetails = ({
  history,
  locationDetails,
  updateActionMenu
}) => {
  useEffect(() => {
    updateActionMenu("locations.oneSelected", {
      locationId: locationDetails.id
    });
  }, []);

  return (
    <React.Fragment>
      <EntityTitle title={locationDetails.name} />

      <EntityDetail Icon={HomeIcon} label={locationDetails.address} />

      <EntityDetail Icon={CategoryIcon} label={locationDetails.category.name} />
    </React.Fragment>
  );
};

export default withRouter(LocationDetails);
