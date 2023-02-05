import React from 'react';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

import imgMobileHeroMd from 'assets/mobile/image-hero@2x.jpg';
import imgMobileHeroSm from 'assets/mobile/image-hero.jpg';
import imgTabletHeroMd from 'assets/tablet/image-hero@2x.jpg';
import imgTabletHeroSm from 'assets/tablet/image-hero.jpg';
import LinkToLocation from './LinkToLocation';

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    display: 'grid',
    gridTemplateColumns: 'minmax(389px, 1fr) 48px 1fr',
    alignItems: 'center',

    'picture': {
      gridColumn: '1 / span 2',
      gridRow: '1'
    },

    'section': {
      gridColumn: '2 / -1',
      gridRow: '1'
    }
  }
}));

const StyledBox = styled(Box)(({ theme }) => ({
}));

const Hero: React.FC = () => {
  return (
    <StyledGrid container mb={15}>
      <picture>
        <source srcSet={imgTabletHeroMd} media="(min-width: 900px)" />
        <source srcSet={imgTabletHeroSm} media="(min-width: 768px)" />
        <source srcSet={imgMobileHeroMd} media="(min-width: 400px)" />
        <CardMedia component="img" src={imgMobileHeroSm} alt="Two person looking at a painting" />
      </picture>

      <StyledBox component="section" px={{ mobile: 2, tablet: 0 }} mt={4} mr={{ tablet: 5}}>
        <Typography
          sx={{
            fontSize: {
              tablet: '4.375rem',
            },
            lineHeight: {
              mobile: '3.438rem',
              tablet: '4.063rem',
            }
          }}
          variant="h3"
          component="h1"
          textTransform="uppercase"
        >
          Modern <Box component="span" display="block">art gallery</Box>
        </Typography>

        <Typography variant="body2" my={{ mobile: 4, tablet: 6 }}>
          The arts in the collection of the Modern Art Gallery all started from a park of inspiration. Will these pieces inspire you? Visit us and find out.
        </Typography>

        <LinkToLocation />
      </StyledBox>
    </StyledGrid>
  )
};

export default Hero;
