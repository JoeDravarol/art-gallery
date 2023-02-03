import React from 'react';
import { Box, BoxProps, CardMedia, Grid, Link, Stack, Typography } from '@mui/material';
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
  fill: defaultIconColor ? theme.palette.common.white : theme.palette.secondary.main
}));

type Props = {
  defaultIconColor?: boolean;
}

const Footer: React.FC<Props> = ({ defaultIconColor }) => {
  return (
    <Box bgcolor="secondary.main" px={4} py={6}>
      <Link to="/" component={RouterLink} display="flex" color="common.black">
        <Logo />
      </Link>

      <Typography
        sx={{ fontSize: '1rem', lineHeight: '1.625rem' }}
        variant="body2"
        my="38px"
        color="common.white"
      >
        The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </Typography>

      <Stack direction="row" spacing={2.5}>
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
    </Box>
  )
};

export default Footer;
