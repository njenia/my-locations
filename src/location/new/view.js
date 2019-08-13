import React, {useEffect} from "react"
import {withRouter} from "react-router"

import UpsertLocation from "../common/components/upsert-location-view"

export const NewLocation = ({history, categoryOptions, upsertLocation, onFormSubmit, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('Locations', [
      {label: "List", clickHandler: () => history.push('/locations')},
      {label: "New", clickHandler: () => history.push('/locations/new'), disabled: true}
    ])
  }, [])

  return <UpsertLocation categoryOptions={categoryOptions} onSubmit={data => {
    upsertLocation(data);
    onFormSubmit();
  }}/>
}

export default withRouter(NewLocation)