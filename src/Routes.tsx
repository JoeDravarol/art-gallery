import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

import DesignSystemPage from 'pages/DesignSystemPage';
import LandingPage from 'pages/LandingPage';
import Layout from 'components/Layout';
import LocationPage from 'pages/LocationPage';

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Route>
    </ReactRoutes>
  )
};

export default Routes;
