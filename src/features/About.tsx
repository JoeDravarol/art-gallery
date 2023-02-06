import React from 'react';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

import imgTabletRoomSm from 'assets/tablet/image-grid-1.jpg';
import imgTabletRoomMd from 'assets/tablet/image-grid-1@2x.jpg';
import imgMobileRoomSm from 'assets/mobile/image-grid-1.jpg';
import imgMobileRoomMd from 'assets/mobile/image-grid-1@2x.jpg';

import imgTabletBenchSm from 'assets/tablet/image-grid-2.jpg';
import imgTabletBenchMd from 'assets/tablet/image-grid-2@2x.jpg';
import imgMobileBenchSm from 'assets/mobile/image-grid-2.jpg';
import imgMobileBenchMd from 'assets/mobile/image-grid-2@2x.jpg';

import imgTabletGallerySm from 'assets/tablet/image-grid-3.jpg';
import imgTabletGalleryMd from 'assets/tablet/image-grid-3@2x.jpg';
import imgMobileGallerySm from 'assets/mobile/image-grid-3.jpg';
import imgMobileGalleryMd from 'assets/mobile/image-grid-3@2x.jpg';

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '3.125rem',
  lineHeight: '2.813rem',
  textTransform: 'uppercase',
})) as typeof Typography;

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridRowGap: theme.spacing(2),

  [theme.breakpoints.up('tablet')]: {
    gridTemplateColumns: '1fr 118px minmax(280px, 1fr)',
    gridTemplateRows: '400px 313px 396px',
    gridGap: 11,
    gridAutoRow: 'row',

    '.gallery-room': {
      gridColumn: '2 / 4',
      gridRow: '1',
    },
    '.grid-item--large': {
      gridColumn: 'span 2',
      gridRow: 'span 2'
    },
    'img': {
      height: '100%',
    }
  }
})) as typeof Grid;

const About: React.FC = () => {
  return (
    <StyledGrid component="main" container px={{ mobile: 2, tablet: 5 }} mb={15}>
      <picture className="gallery-room">
        <source srcSet={imgTabletRoomMd} media="(min-width: 900px)" />
        <source srcSet={imgTabletRoomSm} media="(min-width: 768px)" />
        <source srcSet={imgMobileRoomMd} media="(min-width: 450px)" />
        <CardMedia component="img" src={imgMobileRoomSm} alt="Gallery room" />
      </picture>

      <Box className="gallery-info" mb={2}>
        <Heading
          sx={{ mt: '9px', mb: '21px' }}
          variant="h3"
          component="h2"
        >
          Your day <Box component="span" display="block">at the gallery</Box>
        </Heading>

        <Typography variant="body2">
          Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
        </Typography>
      </Box>

      <picture className="grid-item--large">
        <source srcSet={imgTabletBenchMd} media="(min-width: 900px)" />
        <source srcSet={imgTabletBenchSm} media="(min-width: 768px)" />
        <source srcSet={imgMobileBenchMd} media="(min-width: 450px)" />
        <CardMedia component="img" src={imgMobileBenchSm} alt="Bench overlooking a painting" />
      </picture>

      <picture>
        <source srcSet={imgTabletGalleryMd} media="(min-width: 900px)" />
        <source srcSet={imgTabletGallerySm} media="(min-width: 768px)" />
        <source srcSet={imgMobileGalleryMd} media="(min-width: 450px)" />
        <CardMedia component="img" src={imgMobileGallerySm} alt="People looking at a painting" />
      </picture>

      <Stack
        className="inspired-info"
        px={{ mobile: 3, tablet: 3.5 }}
        py={6}
        bgcolor="secondary.main"
        color="common.white"
        justifyContent={{ tablet: 'center' }}
      >
        <Heading
          variant="h3"
          component="h2"
          mb={3}
        >
          Come & be inspired
        </Heading>

        <Typography variant="body2">
          We're excited to welcome you to our gallery and see how our collections influence you.
        </Typography>
      </Stack>
    </StyledGrid>
  )
};

export default About;
