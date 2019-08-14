import React from 'react'
import {Route, Switch, withRouter} from "react-router-dom"

import {ListLocationsContainer} from './list'
import {NewLocationContainer} from "./new"
import {LocationDetailsContainer} from "./details"
import {SingleMapContainer} from "./single-map"
import {EditLocationContainer} from "./edit"
import {DeleteLocationContainer} from "./delete"

const Locations = ({history, updateActionMenu}) => {
  return (
    <Switch>
      <Route exact path="/locations"
             render={() =>
               <ListLocationsContainer
                 updateActionMenu={updateActionMenu}
               />}
      />

      <Route path="/locations/details/:locationId"
             render={({match: {params: {locationId}}}) =>
               <LocationDetailsContainer
                 updateActionMenu={updateActionMenu}
                 locationId={locationId}
               />}
      />

      <Route path="/locations/map/:locationId"
             render={({match: {params: {locationId}}}) =>
               <SingleMapContainer
                 updateActionMenu={updateActionMenu}
                 locationId={locationId}
               />}
      />

      <Route path="/locations/edit/:locationId" render={({match: {params: {locationId}}}) =>
        <EditLocationContainer
          updateActionMenu={updateActionMenu}
          locationId={locationId}
          onFormSubmit={() => {
            history.push(`/locations`)
          }}
        />}
      />

      <Route path="/locations/delete/:locationId" render={({match: {params: {locationId}}}) =>
        <DeleteLocationContainer
          updateActionMenu={updateActionMenu}
          locationId={locationId}
          onFormSubmit={() => {
            history.push(`/locations`)
          }}
        />}
      />

      <Route path="/locations/new" render={() =>
        <NewLocationContainer
          updateActionMenu={updateActionMenu}
          onFormSubmit={() => {
            history.push(`/locations`)
          }}
        />}
      />
    </Switch>
  )
}

export default withRouter(Locations)
