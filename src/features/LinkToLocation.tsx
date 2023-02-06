import React from 'react';
import { Box, Stack } from "@mui/material";

import { ReactComponent as IconArrowRight } from "assets/icons/icon-arrow-right.svg";
import Link from 'components/Link';

type Props = {
  activateHoverState?: boolean;
}

const LinkToLocation: React.FC<Props> = ({ activateHoverState }) => {
  const className = 'text-container ' + (activateHoverState ? 'hover--active' : ''); 

  return (
    <Link to="/location" className={className}>
      <Box className="text" textAlign="center" component="span" width={204}>
        Our location
      </Box>
      <Stack
        className="arrow"
        component="span"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width={56}
        bgcolor="primary.main"
      >
        <IconArrowRight />
      </Stack>
    </Link>
  )
}

export default LinkToLocation;
