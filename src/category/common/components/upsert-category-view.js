import React from "react"
import {Button,} from '@material-ui/core'
import {Formik} from 'formik'
import styled from 'styled-components'
import size from 'lodash/size'

import TextField from '../../../common/components/text-field'
import {FieldContainer, FormActionContainer, StyledForm} from "../../../common/components/styled-form"
import Typography from "@material-ui/core/Typography/Typography"

export const UpsertCategory = ({initialValues = {}, onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({
          values,
          errors,
          handleChange,
          handleSubmit
        }) => (
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
              placeholder="e.g. Kid-friendly restaurants"
              value={values.name}
            />
          </FieldContainer>

          <FormActionContainer>
            <Button onClick={handleSubmit} disabled={size(values.name) === 0} variant="contained" color="primary">
              Submit
            </Button>
          </FormActionContainer>
        </StyledForm>
      )}
    </Formik>
  )
}

const IntroTextContainer = styled.div`
  margin-bottom: 15px;
`

export default UpsertCategory