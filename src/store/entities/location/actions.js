import {persistNewLocation} from "../../../common/utils/external-storage-api"

export const SET_LOCATION= 'LOCATION/SET'

export function setLocation({ locationId, location }) {
  return {
    type: SET_LOCATION,
    locationId,
    location
  }
}

export function addLocation(location) {
  return async dispatch => {
    const locationId = persistNewLocation(location)
    return dispatch(setLocation({
      locationId,
      location
    }))
  }
}
