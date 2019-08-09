import map from "lodash/map"
import MenuItem from "@material-ui/core/MenuItem/MenuItem"
import Select from '@material-ui/core/Select'

import React from "react"


const MyLocationsSelect = ({
  options,
  handleChange,
  name
}) => {
  const [chosenValue, setChosenValue] = React.useState(null);

  const handleInternalChange = ({target: { value }}) => {
    setChosenValue(value);
    handleChange(value);
  }

  return <Select
    value={chosenValue}
    onChange={handleInternalChange}
    name={name}
  >
    <MenuItem value={null}></MenuItem>
    {
      map(options, ({value, label}) => (<MenuItem key={value} value={value}>{label}</MenuItem>))
    }
  </Select>
}

export default MyLocationsSelect