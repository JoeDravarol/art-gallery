import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const LocationInfo: React.FC = () => {
  return (
    <Box px={2} pt={6} pb={7} component="section" bgcolor="secondary.main" color="common.white">
      <Typography
        sx={{ fontSize: '3.125rem', lineHeight: '2.813rem' }}
        variant="h3"
        textTransform="uppercase"
      >
        Our location
      </Typography>
      
      <Box>
        <Typography
          sx={{ fontSize: '2rem', lineHeight: '2rem', mt: 6, mb: 2.5 }}
          variant="h4"
          color="primary.main"
          textTransform="uppercase"
        >
          99 King street
        </Typography>

        <Stack direction="column" mb={2.5}>
          <Typography variant="body2" component="span">New port</Typography>
          <Typography variant="body2" component="span">RI 02840</Typography>
          <Typography variant="body2" component="span">United States of America</Typography>
        </Stack>

        <Typography variant="body2">
          Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
        </Typography>
      </Box>
    </Box>
  )
};

export default LocationInfo;
