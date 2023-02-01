import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Outlet } from "react-router-dom";

import theme from './theme';

const Layout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  )
};

export default Layout;
