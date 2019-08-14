import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Field, Formik } from "formik";
import Typography from "@material-ui/core/Typography/Typography";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import merge from "lodash/merge";
import size from "lodash/size";
import styled from "styled-components";
import {
  FieldContainer,
  FormActionContainer,
  StyledForm
} from "../../../common/components/styled-form";

import SelectFormikInput from "../../../common/components/select-formik-input";
import Map from "../../../common/components/map";
import TextField from "../../../common/components/text-field";
import { createSimpleMarkersFromCoords } from "../../../common/utils/map-markers";

export const UpsertLocation = ({
  initialValues = {},
  categoryOptions,
  onSubmit
}) => {
  const [selectedCoords, setSelectedCoords] = useState(
    get(initialValues, "coords")
  );

  const validate = values => {
    return (
      size(values.name) > 0 &&
      size(values.address) > 0 &&
      !isEmpty(values.category) &&
      !isEmpty(selectedCoords)
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        onSubmit(
          merge({}, values, {
            coords: selectedCoords,
            category: values.category.id
          })
        );
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <StyledForm>
          <IntroTextContainer>
            <Typography variant="body1">
              Please fill all of the fields below:
            </Typography>
          </IntroTextContainer>
          <FieldContainer>
            <TextField
              name="name"
              label="Name"
              component={TextField}
              placeholder="e.g. Moshe's Pizza"
            />
          </FieldContainer>
          <FieldContainer>
            <TextField
              name="address"
              label="Address"
              component={TextField}
              placeholder="e.g. Independence st. 36, Bat-Yam"
            />
          </FieldContainer>

          <FieldContainer>
            <Field
              name="category"
              component={SelectFormikInput}
              options={categoryOptions}
              initialValue={get(values, "category.id")}
              emptyLabel="Select category"
              fullWidth
            />
          </FieldContainer>
          <FieldContainer>
            <Typography variant="body1">Pin it</Typography>

            <MapContainer
              markers={
                !isEmpty(selectedCoords)
                  ? createSimpleMarkersFromCoords([selectedCoords])
                  : []
              }
              onClick={(lat, lng) => setSelectedCoords([lat, lng])}
              center={selectedCoords}
            />
          </FieldContainer>
          <FormActionContainer>
            <Button
              onClick={handleSubmit}
              disabled={!validate(values)}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </FormActionContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

const MapContainer = styled(Map)`
  height: 300px;
  width: 100%;
  border: 1px solid #848282;
`;

const IntroTextContainer = styled.div`
  margin-bottom: 15px;
`;

export default UpsertLocation;
