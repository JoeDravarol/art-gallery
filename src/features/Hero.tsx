import React from 'react';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

import imgHeroMd from 'assets/mobile/image-hero@2x.jpg'
import imgHeroSm from 'assets/mobile/image-hero.jpg'
import LinkToLocation from './LinkToLocation';

const Img = styled(CardMedia)(({ theme }) => ({
  display: 'block',
}));

const Hero: React.FC = () => {
  return (
    <Grid container mb={15}>
      <picture>
        <source srcSet={imgHeroMd} media="(min-width: 750px)" />
        <CardMedia component="img" src={imgHeroSm} alt="Two person looking at a painting" />
      </picture>

      <Box px={2} mt={4}>
        <Typography sx={{ lineHeight: '3.438rem' }} variant="h3" component="h1" textTransform="uppercase">
          Modern <Box component="span" display="block">art gallery</Box>
        </Typography>

        <Typography variant="body2" my={4}>
          The arts in the collection of the Modern Art Gallery all started from a park of inspiration. Will these pieces inspire you? Visit us and find out.
        </Typography>

        <LinkToLocation />
      </Box>
    </Grid>
  )
};

export default Hero;
