import React from "react"
import {Button,} from '@material-ui/core'
import {TextField,} from 'formik-material-ui'
import {Field, Form, Formik} from 'formik'

export const UpsertCategory = ({initialValues={}, onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values)
      }}
    >
      {({
          values,
          errors,
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
              value={values.name}
            />
          </div>

          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default UpsertCategory