import React from 'react';
import { Box } from '@mui/material';

import LinkToHome from 'features/LinkToHome';
import Map from 'features/Map';
import LocationInfo from 'features/LocationInfo';

const LocationPage: React.FC = () => {
  return (
    <>
      <Box position="fixed" zIndex="10">
        <LinkToHome />
      </Box>
      <Map />
      <LocationInfo />
    </>
  )
};

export default LocationPage;
