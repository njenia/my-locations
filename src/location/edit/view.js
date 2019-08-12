import React, {useEffect} from "react"
import {withRouter} from "react-router"

import UpsertLocation from "../common/components/upsert-location-view"

export const EditLocation = ({history, locationData, categoryOptions, upsertLocation, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(`Location: ${locationData.name}`, [
      {label: "Map", clickHandler: () => history.push(`/locations/map/${locationData.id}`)},
      {label: "Details", clickHandler: () => history.push(`/locations/details/${locationData.id}`)}
    ])
  }, [])

  return <UpsertLocation initialValues={locationData} categoryOptions={categoryOptions} onSubmit={upsertLocation} />
}

export default withRouter(EditLocation)