import React from 'react';
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

import imgRoomSm from 'assets/mobile/image-grid-1.jpg';
import imgRoomMd from 'assets/mobile/image-grid-1@2x.jpg';
import imgBenchSm from 'assets/mobile/image-grid-2.jpg';
import imgBenchMd from 'assets/mobile/image-grid-2@2x.jpg';
import imgGallerySm from 'assets/mobile/image-grid-3.jpg';
import imgGalleryMd from 'assets/mobile/image-grid-3@2x.jpg';

const Img = styled(CardMedia)(({ theme }) => ({
  display: 'block',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '3.125rem',
  lineHeight: '2.813rem',
  textTransform: 'uppercase',
})) as typeof Typography;

const About: React.FC = () => {
  return (
    <Grid component="main" container px={2} mb={15}>
      <picture>
        <source srcSet={imgRoomMd} media="(min-width: 750px)" />
        <CardMedia component="img" src={imgRoomSm} alt="Two person looking at a painting" />
      </picture>

      <Box mb={4}>
        <Heading
          sx={{ mt: '25px', mb: '21px' }}
          variant="h3"
          component="h2"
        >
          Your day <Box component="span" display="block">at the gallery</Box>
        </Heading>

        <Typography variant="body2">
          Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
        </Typography>
      </Box>

      <Stack spacing={2}>
        <picture>
          <source srcSet={imgBenchMd} media="(min-width: 750px)" />
          <CardMedia component="img" src={imgBenchSm} alt="Two person looking at a painting" />
        </picture>

        <picture>
          <source srcSet={imgGalleryMd} media="(min-width: 750px)" />
          <CardMedia component="img" src={imgGallerySm} alt="Two person looking at a painting" />
        </picture>

        <Box px={3} py={6} bgcolor="secondary.main" color="common.white">
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
        </Box>
      </Stack>
    </Grid>
  )
};

export default About;
