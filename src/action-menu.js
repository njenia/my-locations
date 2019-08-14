import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import map from "lodash/map";
import { withRouter } from "react-router";
import styled from "styled-components";

const ActionMenu = ({
  mainActionUrl,
  presetConfig: { title, actions },
  params,
  history
}) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <MainAction onClick={() => history.push(mainActionUrl)}>
          {title}
        </MainAction>
        {map(actions, ({ Icon, label, getUrl, disabled }) => (
          <Button
            disabled={disabled}
            onClick={() => history.push(getUrl(params))}
          >
            {Icon && <Icon/>}
            {label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

const MainAction = styled(Typography).attrs({
  variant: "h6"
})`
  cursor: pointer;
`;

export default withRouter(ActionMenu);
