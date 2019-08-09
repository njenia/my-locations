import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import map from 'lodash/map'

const ActionMenu = ({ title, actions }) => {
  return ( 
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
        {
          map(actions, ({label, clickHandler}) => (
            <Button onClick={clickHandler}>
              {label}
            </Button>
          ))
        }
      </Toolbar>
    </AppBar>
  );
}

export default ActionMenu;
