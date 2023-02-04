import React from 'react';

import LinkToHome from 'features/LinkToHome';
import Map from 'features/Map';
import { Box } from '@mui/material';

const LocationPage: React.FC = () => {
  return (
    <>
      <Box position="fixed" zIndex="10">
        <LinkToHome />
      </Box>
      <Map />
    </>
  )
};

export default LocationPage;
