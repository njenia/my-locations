import React, {useEffect} from "react"
import {withRouter} from "react-router"

import UpsertLocation from "../common/components/upsert-location-view"

export const EditLocation = ({history, locationData, categoryOptions, upsertLocation, onFormSubmit, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('locations.oneSelected', {locationId: locationData.id})
  }, [])

  return <UpsertLocation initialValues={locationData} categoryOptions={categoryOptions} onSubmit={data => {
    upsertLocation(data);
    onFormSubmit();
  }} />
}

export default withRouter(EditLocation)