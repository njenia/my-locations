import React, {useEffect} from "react"
import {Button,} from '@material-ui/core'
import {TextField,} from 'formik-material-ui'
import {Field, Form, Formik} from 'formik'
import {withRouter} from "react-router"
import Typography from "@material-ui/core/Typography/Typography"

export const NewCategory = ({history, categoryOptions, addCategory, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('Categories', [
      {label: "List", clickHandler: () => history.push('/categories')},
    ])
  }, [])

  return (
    <Formik
      initialValues={{name: ''}}
      onSubmit={(values) => {
        addCategory({
          name: values.name
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
            New Category
          </Typography>

          <div>
            <Field
              name="name"
              type="text"
              label="Name"
              component={TextField}
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

export default withRouter(NewCategory)