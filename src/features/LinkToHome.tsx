import React from 'react';
import { Box, Stack } from "@mui/material";

import { ReactComponent as IconArrowLeft } from "assets/icons/icon-arrow-left.svg";
import Link from 'components/Link';

type Props = {
  activateHoverState?: boolean;
}

const LinkToHome: React.FC<Props> = ({ activateHoverState }) => {
  const className = 'text-container ' + (activateHoverState ? 'hover--active' : ''); 

  return (
    <Link to="/" className={className} animateToRight>
      <Stack
        className="arrow"
        component="span"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width={56}
        bgcolor="primary.main"
      >
        <IconArrowLeft />
      </Stack>
      <Box className="text" textAlign="center" component="span" width={204}>
        Back to home
      </Box>
    </Link>
  )
};

export default LinkToHome;
