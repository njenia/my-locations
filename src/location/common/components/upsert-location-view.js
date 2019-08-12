import React, {useState} from "react"
import {Button,} from '@material-ui/core'
import {TextField,} from 'formik-material-ui'
import {Field, Form, Formik} from 'formik'
import Typography from "@material-ui/core/Typography/Typography"
import isEmpty from "lodash/isEmpty"
import get from "lodash/get"
import merge from "lodash/merge"
import styled from "styled-components"
import Map from "../../../common/components/map"
import SelectFormikInput from "../../../common/components/select-formik-input"

export const UpsertLocation = ({initialValues={}, categoryOptions, onSubmit}) => {
  const [selectedCoords, setSelectedCoords] = useState(get(initialValues, 'coords'))

  const createSelectionMarker = ({name, address}) => ({
    coords: selectedCoords,
    title: name,
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(merge({}, values, {
          coords: selectedCoords,
        }))
      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit
        }) => (
        <Form>
          <div>
            <Field
              name="name"
              type="text"
              label="Name"
              component={TextField}
            />
          </div>
          <div>
            <Field
              name="address"
              type="text"
              label="Address"
              component={TextField}
            />
          </div>

          <div>
            <Field
              name="category"
              label="Category"
              component={SelectFormikInput}
              options={categoryOptions}
              initialValue={values.category}
            />
          </div>

          <Typography variant="body1" color="inherit">
            Choose the location on the map:
          </Typography>

          <MapContainer
            markers={!isEmpty(selectedCoords) ? [createSelectionMarker(values)] : []}
            onClick={(lat, lng) => setSelectedCoords([lat, lng])}/>

          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

const MapContainer = styled(Map)`
  height: 200px;
  width: 200px;
`

export default UpsertLocation