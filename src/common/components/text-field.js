import {TextField} from "formik-material-ui"
import {Field} from "formik"
import React from "react"

const MyLocationsTextField = (props) => (
  <Field
    {...props}
    component={TextField}
    fullWidth
    variant="outlined"
    style={{
      backgroundColor: "#ffffff"
    }}
  />
)

export default MyLocationsTextField