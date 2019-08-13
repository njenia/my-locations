import React, {useEffect} from "react"
import {withRouter} from "react-router"
import HomeIcon from '@material-ui/icons/Home'
import CategoryIcon from '@material-ui/icons/Category'
import { EntityTitle, EntityDetail } from "../../common/components/entity-details"


export const LocationDetails = ({history, locationDetails, updateActionMenu}) => {
  useEffect(() => {
    updateActionMenu(locationDetails.name, [
      {label: "Map", clickHandler: () => history.push(`/locations/map/${locationDetails.id}`)},
      {label: "Details", clickHandler: () => history.push(`/locations/details/${locationDetails.id}`), disabled: true},
      {label: "Edit", clickHandler: () => history.push(`/locations/edit/${locationDetails.id}`)},
      {label: "Delete", clickHandler: () => history.push(`/locations/delete/${locationDetails.id}`)}
    ])
  }, [])

  return (
    <React.Fragment>
      <EntityTitle title={locationDetails.name} />

      <EntityDetail
        Icon={HomeIcon}
        label={locationDetails.address}
      />

      <EntityDetail
        Icon={CategoryIcon}
        label={locationDetails.category.name}
      />
    </React.Fragment>
  )
}

export default withRouter(LocationDetails)