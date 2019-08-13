import map from "lodash/map"
import zipObject from "lodash/zipObject"
import isNil from "lodash/isNil"
import MenuItem from "@material-ui/core/MenuItem/MenuItem"
import Select from '@material-ui/core/Select'

import React from "react"
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput"


const MyLocationsSelect = ({
  options,
  handleChange,
  initialValue,
  name,
  emptyLabel,
  fullWidth,
  isDisabled
}) => {
  const [chosenValue, setChosenValue] = React.useState(initialValue);

  const handleInternalChange = ({target: { value }}) => {
    setChosenValue(value);
    handleChange(value);
  }

  const findLabelForValue = value => zipObject(map(options, 'value'), map(options, 'label'))[value]

  return <Select
    value={chosenValue}
    onChange={handleInternalChange}
    name={name}
    input={<OutlinedInput name={name} />}
    disabled={isDisabled}
    style={{
      backgroundColor: '#ffffff',
      width: fullWidth ? '100%' : 'auto'
    }}
    displayEmpty={!isNil(emptyLabel)}
    renderValue={value => findLabelForValue(value) || emptyLabel}
  >
    <MenuItem value={null} />
    {
      map(options, ({value, label}) => (<MenuItem key={value} value={value}>{label}</MenuItem>))
    }
  </Select>
}

export default MyLocationsSelect