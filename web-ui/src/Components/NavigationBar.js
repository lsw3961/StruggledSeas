import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button component={Link} to="/component1" color="inherit">
          Component 1
        </Button>
        <Button component={Link} to="/component2" color="inherit">
          Component 2
        </Button>
        <Button component={Link} to="/component3" color="inherit">
          Component 3
        </Button>
        <Button component={Link} to="/component4" color="inherit">
          Component 4
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
