import React, { useEffect } from "react";
import isEmpty from 'lodash/isEmpty';

import UpsertLocation from "../common/components/upsert-location-view";
import {FieldContainer, FormActionContainer, StyledForm} from "../../common/components/styled-form"
import Typography from "@material-ui/core/Typography/Typography"
import Button from "@material-ui/core/Button/Button"

export const NewLocation = ({
  categoryOptions,
  upsertLocation,
  onFormSubmit,
  updateActionMenu,
  newCategoryClicked
}) => {
  useEffect(() => {
    updateActionMenu("locations.noneSelected");
  }, []);

  if (isEmpty(categoryOptions)) {
    return <StyledForm>
      <FieldContainer>
        <Typography variant="body1">
          There are no categories. You must have at least one to create a new location.
        </Typography>
      </FieldContainer>
      <FormActionContainer>
        <Button onClick={newCategoryClicked} variant="contained" color="secondary">
          New category
        </Button>
      </FormActionContainer>
    </StyledForm>;
  }
  return (
    <UpsertLocation
      categoryOptions={categoryOptions}
      onSubmit={data => {
        upsertLocation(data);
        onFormSubmit();
      }}
    />
  );
};

export default NewLocation;
