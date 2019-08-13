import React, {useEffect} from "react"
import {withRouter} from "react-router"

import UpsertLocation from "../common/components/upsert-location-view"

export const EditLocation = ({history, locationData, categoryOptions, upsertLocation, onFormSubmit, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(locationData.name, [
      {label: "Map", clickHandler: () => history.push(`/locations/map/${locationData.id}`)},
      {label: "Details", clickHandler: () => history.push(`/locations/details/${locationData.id}`)},
      {label: "Edit", clickHandler: () => history.push(`/locations/edit/${locationData.id}`), disabled: true},
      {label: "Delete", clickHandler: () => history.push(`/locations/delete/${locationData.id}`)}
    ])
  }, [])

  return <UpsertLocation initialValues={locationData} categoryOptions={categoryOptions} onSubmit={data => {
    upsertLocation(data);
    onFormSubmit();
  }} />
}

export default withRouter(EditLocation)