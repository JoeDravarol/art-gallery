import React from 'react';
import { Box, BoxProps, Grid, Link, LinkProps, Stack, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/icons/logo-light.svg';
import { ReactComponent as IconFacebook } from 'assets/icons/icon-facebook.svg';
import { ReactComponent as IconInstagram } from 'assets/icons/icon-instagram.svg';
import { ReactComponent as IconTwitter } from 'assets/icons/icon-twitter.svg'

interface IconContainerProps extends BoxProps {
  defaulticoncolor?: boolean;
}

const IconContainer = styled(Box)<IconContainerProps>(({ defaulticoncolor, theme }) => ({
  display: 'flex', // Remove space between inline element (svg)
  cursor: 'pointer',
  fill: defaulticoncolor ? theme.palette.common.white : theme.palette.secondary.main,
  '&:hover': {
    fill: defaulticoncolor ? theme.palette.primary.main : theme.palette.common.white,
  }
}));

interface StyledLinkProps extends LinkProps {
  defaulticoncolor?: boolean;
  to: string;
  component: React.ElementType;
}

const StyledLink = styled(Link)<StyledLinkProps>(({ defaulticoncolor, theme }) => ({
  fill: defaulticoncolor ? theme.palette.common.white : theme.palette.secondary.main,
  [theme.breakpoints.up('desktop')]: {
    display: 'block',
    width: 160,
    height: 58,
    'svg': {
      width: '100%',
      height: '100%',
    }
  }
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    display: 'grid',
    gridTemplateColumns: '175px minmax(281px, 1fr) 1fr',
    maxWidth: 1110,
    height: 216,
    alignContent: 'center',
    marginInline: 'auto',
  },
  [theme.breakpoints.up('desktop')]: {
    gridTemplateColumns: '300px 430px 1fr'
  }
}));

type Props = {
  defaultIconColor?: boolean;
  bgColor?: string;
  fontColor?: string;
}

const Footer: React.FC<Props> = ({ defaultIconColor, bgColor = 'secondary.main', fontColor = "common.white" }) => {
  return (
    <Box bgcolor={bgColor} color={fontColor}>
      <StyledGrid
        px={{ mobile: 4, tablet: 5, desktop: 'initial' }}
        py={{ mobile: 6, tablet: 7, desktop: 10 }}
      >
        <StyledLink
          to="/"
          component={RouterLink}
          display="flex"
          defaulticoncolor={defaultIconColor}
        >
          <Logo />
        </StyledLink>

        <Typography
          variant="body2"
          fontSize={{ mobile: '1rem', desktop: '1.125rem' }}
          lineHeight={{ mobile: '1.625rem', desktop: '1.75rem' }}
          my={{ mobile: '38px', tablet: 'initial' }}
        >
          The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </Typography>

        <Stack direction="row" spacing={2.5} justifySelf={{ tablet: 'end' }}>
          <IconContainer defaulticoncolor={defaultIconColor}>
            <IconFacebook />
          </IconContainer>

          <IconContainer defaulticoncolor={defaultIconColor}>
            <IconInstagram />
          </IconContainer>

          <IconContainer defaulticoncolor={defaultIconColor}>
            <IconTwitter />
          </IconContainer>
        </Stack>
      </StyledGrid>
    </Box>
  )
};

export default Footer;
