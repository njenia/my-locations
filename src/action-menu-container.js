import React from 'react';
import { withRouter } from "react-router-dom";
import ActionMenu from './action-menu'
import map from 'lodash/map'

const actionsConfig = {
  locations: {
    title: "Locations",
    actions: [
      { label: "List", actionPath: "" },
      { label: "New", actionPath: "new" }
    ]
  }
};

const ActionMenuContainer = ({ location: { pathname }, history }) => {
  return ( 
    <ActionMenu 
      title={getTitle(pathname)} 
      actions={getActions(pathname, (actionPath) => history.push(`/${getEntityId(pathname)}/${actionPath}`))} />
  );
}

const getTitle = (currentPath) => actionsConfig[getEntityId(currentPath)].title

const getActions = (currentPath, goToAction) => map(
  actionsConfig[getEntityId(currentPath)].actions, 
  ({ label, actionPath }) => ({label, clickHandler: () => goToAction(actionPath)})
)

const getEntityId = (currentPath) => currentPath.split('/')[1];

export default withRouter(ActionMenuContainer);
