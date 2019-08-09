import React from "react"

import Select from './select'

const SelectFormikInput = ({field, form, options}) => {
  const handleChange = value => {
    form.setFieldValue(field.name, value)
  }

  return (<Select
    handleChange={handleChange}
    name={field.name}
    options={options}
  />)
}

export default SelectFormikInput
