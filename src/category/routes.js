import React from 'react'
import {Route, Switch, withRouter} from "react-router-dom"

import {ListCategoriesContainer} from './list'
import {NewCategoryContainer} from "./new"
import {CategoryDetailsContainer} from "./details"
import {EditCategoryContainer} from "./edit"
import {DeleteCategoryContainer} from "./delete"

const Categories = ({history, updateActionMenu}) => {
  return (
    <Switch>
      <Route exact path="/categories"
             render={() =>
               <ListCategoriesContainer
                 onCategoryClicked={categoryId => {
                   history.push(`/categories/details/${categoryId}`)
                 }}
                 updateActionMenu={updateActionMenu}
               />}
      />

      <Route path="/categories/details/:categoryId"
             render={({match: {params: {categoryId}}}) =>
               <CategoryDetailsContainer
                 updateActionMenu={updateActionMenu}
                 categoryId={categoryId}
                 onLocationClicked={locationId => {
                   history.push(`/locations/details/${locationId}`)
                 }}
               />}
      />


      <Route path="/categories/new" render={() =>
        <NewCategoryContainer
          updateActionMenu={updateActionMenu}
          onSubmit={() => {
            history.push(`/categories`)
          }}
        />}
      />

      <Route path="/categories/edit/:categoryId" render={({match: {params: {categoryId}}}) =>
        <EditCategoryContainer
          updateActionMenu={updateActionMenu}
          categoryId={categoryId}
          onSubmit={() => {
            history.push(`/categories`)
          }}
        />}
      />

      <Route path="/categories/delete/:categoryId" render={({match: {params: {categoryId}}}) =>
        <DeleteCategoryContainer
          updateActionMenu={updateActionMenu}
          categoryId={categoryId}
          onLocationClicked={locationId => {
            history.push(`/locations/details/${locationId}`)
          }}
          onSubmit={() => {
            history.push(`/categories`)
          }}
        />}
      />
    </Switch>
  )
}

export default withRouter(Categories)
