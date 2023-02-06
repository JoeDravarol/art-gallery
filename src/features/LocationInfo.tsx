import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    display: 'grid',
    gridTemplateColumns: 'minmax(223px, 580px) minmax(398px, 540px)',
    justifyItems: 'center',
    gridGap: theme.spacing(8)
  }
})) as typeof Grid;

const LocationInfo: React.FC = () => {
  return (
    <StyledGrid
      container
      px={{ mobile: 2, tablet: 5 }}
      pt={{ mobile: 6, tablet: 11 }}
      pb={{ mobile: 7, tablet: 10 }}
      component="section"
      bgcolor="secondary.main"
      color="common.white"
    >
      <Typography
        sx={{ fontSize: '3.125rem', lineHeight: '2.813rem' }}
        variant="h3"
        textTransform="uppercase"
      >
        Our location
      </Typography>
      
      <Box>
        <Typography
          sx={{ fontSize: '2rem', lineHeight: '2rem' }}
          mt={{ mobile: 6, tablet: 'initial' }}
          variant="h4"
          color="primary.main"
          textTransform="uppercase"
        >
          99 King street
        </Typography>

        <Stack direction="column" my={2.5}>
          <Typography variant="body2" component="span">New port</Typography>
          <Typography variant="body2" component="span">RI 02840</Typography>
          <Typography variant="body2" component="span">United States of America</Typography>
        </Stack>

        <Typography variant="body2">
          Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
        </Typography>
      </Box>
    </StyledGrid>
  )
};

export default LocationInfo;
