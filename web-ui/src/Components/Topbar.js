import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography textAlign={'center'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            A Million Studios
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
