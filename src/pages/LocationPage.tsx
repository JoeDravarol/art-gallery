import React from 'react';
import { Box } from '@mui/material';

import LinkToHome from 'features/LinkToHome';
import Map from 'features/Map';
import LocationInfo from 'features/LocationInfo';
import Footer from 'features/Footer';

const LocationPage: React.FC = () => {
  return (
    <>
      <Box position="fixed" zIndex="10" ml={{ tablet: 4.75 }}>
        <LinkToHome />
      </Box>
      <Map />
      <LocationInfo />
      <Footer bgColor="primary.main" fontColor="secondary.main" />
    </>
  )
};

export default LocationPage;
