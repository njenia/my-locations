import {
  persistLocation,
  externalDeleteLocation
} from "../../../common/utils/external-storage-api";

export const SET_LOCATION = "LOCATION/SET";
export const UNSET_LOCATION = "LOCATION/UNSET";

export function setLocation({ locationId, location }) {
  return {
    type: SET_LOCATION,
    locationId,
    location
  };
}

export function unsetLocation({ locationId }) {
  return {
    type: UNSET_LOCATION,
    locationId
  };
}

export function upsertLocation(location) {
  return async dispatch => {
    const locationId = persistLocation(location);
    return dispatch(
      setLocation({
        locationId,
        location
      })
    );
  };
}

export function deleteLocation(locationId) {
  return async dispatch => {
    externalDeleteLocation(locationId);
    return dispatch(
      unsetLocation({
        locationId
      })
    );
  };
}
