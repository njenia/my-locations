import React from 'react'
import {Route, Switch, withRouter} from "react-router-dom"

import {ListCategoriesContainer} from './list'
import {NewCategoryContainer} from "./new"
import {CategoryDetailsContainer} from "./details"

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
               />}
      />


      <Route path="/categories/new" render={() =>
        <NewCategoryContainer
          updateActionMenu={updateActionMenu}
        />}
      />
    </Switch>
  )
}

export default withRouter(Categories)
