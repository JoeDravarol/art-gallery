import React from 'react';
import { Box, BoxProps, Grid, Link, LinkProps, Stack, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/icons/logo-light.svg';
import { ReactComponent as IconFacebook } from 'assets/icons/icon-facebook.svg';
import { ReactComponent as IconInstagram } from 'assets/icons/icon-instagram.svg';
import { ReactComponent as IconTwitter } from 'assets/icons/icon-twitter.svg'

interface IconContainerProps extends BoxProps {
  defaultIconColor?: boolean;
}

const IconContainer = styled(Box)<IconContainerProps>(({ defaultIconColor, theme }) => ({
  display: 'flex', // Remove space between inline element (svg)
  cursor: 'pointer',
  fill: defaultIconColor ? theme.palette.common.white : theme.palette.secondary.main,
  '&:hover': {
    fill: defaultIconColor ? theme.palette.primary.main : theme.palette.common.white,
  }
}));

interface StyledLinkProps extends LinkProps {
  defaultIconColor?: boolean;
}

const StyledLink = styled(Link)<StyledLinkProps>(({ defaultIconColor, theme }) => ({
  fill: defaultIconColor ? theme.palette.common.white : theme.palette.secondary.main
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    display: 'grid',
    gridTemplateColumns: '175px minmax(281px, 1fr) 223px',
  }
}));

type Props = {
  defaultIconColor?: boolean;
  bgColor?: string;
  fontColor?: string;
}

const Footer: React.FC<Props> = ({ defaultIconColor, bgColor = 'secondary.main', fontColor = "common.white" }) => {
  return (
    <StyledGrid
      bgcolor={bgColor}
      px={{ mobile: 4, tablet: 5 }}
      py={{ mobile: 6, tablet: 7 }}
      color={fontColor}
    >
      <StyledLink
        to="/"
        component={RouterLink}
        display="flex"
        defaultIconColor={defaultIconColor}
      >
        <Logo />
      </StyledLink>

      <Typography
        sx={{ fontSize: '1rem', lineHeight: '1.625rem' }}
        variant="body2"
        my={{ mobile: '38px', tablet: 'initial' }}
      >
        The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </Typography>

      <Stack direction="row" spacing={2.5} justifySelf={{ tablet: 'end' }}>
        <IconContainer defaultIconColor={defaultIconColor}>
          <IconFacebook />
        </IconContainer>

        <IconContainer defaultIconColor={defaultIconColor}>
          <IconInstagram />
        </IconContainer>

        <IconContainer defaultIconColor={defaultIconColor}>
          <IconTwitter />
        </IconContainer>
      </Stack>
    </StyledGrid>
  )
};

export default Footer;
