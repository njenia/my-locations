import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import React from "react"


const MyLocationsCheckbox = ({
  options,
  handleChange,
  label
}) => {
  const [checked, setChecked] = React.useState(false);

  const handleInternalChange = (event, checked) => {
    setChecked(checked);
    handleChange(checked);
  }

  return <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        onChange={handleInternalChange}
      />
    }
    label={label}
  />
}

export default MyLocationsCheckbox