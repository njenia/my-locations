import React, {useEffect} from "react"
import {withRouter} from "react-router"

import UpsertLocation from "../common/components/upsert-location-view"

export const NewLocation = ({history, categoryOptions, upsertLocation, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu('Locations', [
      {label: "List", clickHandler: () => history.push('/locations')},
      {label: "Map", clickHandler: () => history.push('/locations/map')},
      {label: "New", clickHandler: () => history.push('/locations/new')}
    ])
  }, [])

  return <UpsertLocation categoryOptions={categoryOptions} onSubmit={upsertLocation}/>
}

export default withRouter(NewLocation)