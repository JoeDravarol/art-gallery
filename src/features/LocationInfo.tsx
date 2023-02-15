import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    display: 'grid',
    gridTemplateColumns: 'minmax(223px, 580px) minmax(398px, 540px)',
    height: 436,
    justifyItems: 'center',
    gridGap: theme.spacing(8)
  },
  [theme.breakpoints.up('desktop')]: {
    maxWidth: 1110,
    gridTemplateColumns: '570px 540px',
    justifyItems: 'revert',
    gridGap: 'revert',
    marginInline: 'auto',
  }
})) as typeof Grid;

const LocationInfo: React.FC = () => {
  return (
    <Box component="section" bgcolor="secondary.main" color="common.white">
      <StyledGrid
        container
        px={{ mobile: 2, tablet: 5, desktop: 'initial' }}
        pt={{ mobile: 6, tablet: 11, desktop: 13 }}
        pb={{ mobile: 7, tablet: 10, desktop: 16 }}
      >
        <Typography
          variant="h3"
          textTransform="uppercase"
          fontSize={{ mobile: '3.125rem', desktop: '4.375rem' }}
          lineHeight={{ mobile: '2.813rem', desktop: '4.375rem' }}
          maxWidth={{ desktop: '350px' }}
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
            <Typography variant="body2" component="span" fontSize={{ desktop: '1.375rem'}} lineHeight={{ desktop: '2rem' }}>New port</Typography>
            <Typography variant="body2" component="span" fontSize={{ desktop: '1.375rem'}} lineHeight={{ desktop: '2rem' }}>RI 02840</Typography>
            <Typography variant="body2" component="span" fontSize={{ desktop: '1.375rem'}} lineHeight={{ desktop: '2rem' }}>United States of America</Typography>
          </Stack>

          <Typography
            variant="body2" 
            fontSize={{ desktop: '1.375rem'}} 
            lineHeight={{ desktop: '2rem' }}
          >
            Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
          </Typography>
        </Box>
      </StyledGrid>
    </Box>
  )
};

export default LocationInfo;
