import React, {useEffect} from "react"

import UpsertLocation from "../common/components/upsert-location-view"

export const NewLocation = ({categoryOptions, upsertLocation, onFormSubmit, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('locations.noneSelected')
  }, [])

  return <UpsertLocation categoryOptions={categoryOptions} onSubmit={data => {
    upsertLocation(data);
    onFormSubmit();
  }}/>
}

export default NewLocation