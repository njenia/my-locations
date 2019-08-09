import React, {useEffect, useState} from "react"
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import {Button,} from '@material-ui/core'
import {TextField,} from 'formik-material-ui'
import {Field, Form, Formik} from 'formik'
import {withRouter} from "react-router"

import Map from '../../common/components/map'
import Typography from "@material-ui/core/Typography/Typography"
import SelectFormikInput from "../../common/components/select-formik-input"

export const NewLocation = ({history, categoryOptions, addLocation, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('Locations', [
      {label: "List", clickHandler: () => history.push('/locations')},
      {label: "Map", clickHandler: () => history.push('/locations/map')},
      {label: "New", clickHandler: () => history.push('/locations/new')}
    ])
  }, [])

  const [selectedCoords, setSelectedCoords] = useState([])

  const createSelectionMarker = ({name, address}) => ({
    coords: selectedCoords,
    title: name,
  })

  return (
    <Formik
      initialValues={{name: '', address: ''}}
      onSubmit={(values) => {
        addLocation({
          name: values.name,
          address: values.address,
          coords: selectedCoords,
          category: values.category
        })
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
          <Typography variant="h6" color="inherit">
            New Location
          </Typography>

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

export default withRouter(NewLocation)