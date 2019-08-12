import React from "react"

import Select from './select'

const SelectFormikInput = ({field, form, options, initialValue, nullValueLabel}) => {
  const handleChange = value => {
    form.setFieldValue(field.name, value)
  }

  return (<Select
    handleChange={handleChange}
    name={field.name}
    options={options}
    initialValue={initialValue}
  />)
}

export default SelectFormikInput
