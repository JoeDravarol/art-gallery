import React from 'react';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

import imgMobileHeroMd from 'assets/mobile/image-hero@2x.jpg';
import imgMobileHeroSm from 'assets/mobile/image-hero.jpg';
import imgTabletHeroMd from 'assets/tablet/image-hero@2x.jpg';
import imgTabletHeroSm from 'assets/tablet/image-hero.jpg';
import imgDesktopHeroMd from 'assets/desktop/image-hero@2x.jpg';
import imgDesktopHeroSm from 'assets/desktop/image-hero.jpg';

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
  },
  [theme.breakpoints.up('desktop')]: {
    maxWidth: 1275,
    gridTemplateColumns: '450px 475px 65px 1fr',
    gridTemplateRows: '190px 1fr',
    position: 'relative',
    alignItems: 'revert',

    '&::before': {
      content: "''",
      backgroundColor: theme.palette.secondary.main,
      width: '100%',
      height: '100%',
      gridColumn: '1',
      gridRow: '1 / span 2'
    },

    'picture': {
      gridColumn: '2 / span 2',
      gridRow: '1/ span 2'
    },
    'section': {
      gridColumn: '1 / -1',
      gridRow: '2',
      width: 1110,
      marginLeft: 'auto',

      display: 'flex',
      justifyContent: 'space-between',
    },
    '.heading': {
      position: 'relative',
      zIndex: 5,
      mixBlendMode: 'difference',
    }
  },
  '@media (min-width: 1600px)': {
    marginInline: 'auto',
  }
}));

const StyledBox = styled(Box)(({ theme }) => ({
}));

const Hero: React.FC = () => {
  return (
    <StyledGrid container mb={{ mobile: 15, desktop: 22.5 }}>
      <picture>
        <source srcSet={imgDesktopHeroMd} media="(min-width: 1600px)" />
        <source srcSet={imgDesktopHeroSm} media="(min-width: 1440px)" />
        <source srcSet={imgTabletHeroMd} media="(min-width: 900px)" />
        <source srcSet={imgTabletHeroSm} media="(min-width: 768px)" />
        <source srcSet={imgMobileHeroMd} media="(min-width: 400px)" />
        <CardMedia component="img" src={imgMobileHeroSm} alt="Two person looking at a painting" />
      </picture>

      <StyledBox
        component="section"
        px={{ mobile: 2, tablet: 0 }}
        mt={{ mobile: 4, desktop: 'initial' }}
        mr={{ tablet: 5, desktop: 'initial' }}
      >
        <Typography
          className="heading"
          sx={{
            fontSize: {
              tablet: '4.375rem',
              desktop: '6rem',
            },
            lineHeight: {
              mobile: '3.438rem',
              tablet: '4.063rem',
              desktop: '5.5rem',
            }
          }}
          variant="h3"
          component="h1"
          textTransform="uppercase"
          color={{ desktop: 'common.white' }}
        >
          Modern <Box component="span" display="block">art gallery</Box>
        </Typography>

        <Box maxWidth={{ desktop: '350px' }}>
          <Typography
            variant="body2"
            my={{ mobile: 4, tablet: 6, desktop: 8 }}
            mt={{ desktop: 'initial' }}
            fontSize={{ desktop: '1.375rem' }}
            lineHeight={{ desktop: '2rem' }}
          >
            The arts in the collection of the Modern Art Gallery all started from a park of inspiration. Will these pieces inspire you? Visit us and find out.
          </Typography>

          <LinkToLocation />
        </Box>
      </StyledBox>
    </StyledGrid>
  )
};

export default Hero;
