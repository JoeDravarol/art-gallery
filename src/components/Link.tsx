import React from "react";
import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  to: string;
  className?: string;
  children: React.ReactNode;
  animateToRight?: boolean;
};

interface StyledButtonProps {
  animateToRight?: boolean;
}

const StyledButton = styled(Button)<StyledButtonProps>(({ animateToRight, theme }) => ({
  padding: 0,
  minHeight: 72,
  borderRadius: 0,
  fontSize: '1.25rem', // 20px
  alignItems: "revert",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  transition: "all 150ms cubic-bezier(.58,-0.03,.47,1.04) 100ms",
  
  '.text': {
    position: 'relative',
    zIndex: 10,
  },
  'svg': {
    position: 'relative',
    zIndex: 10,
  },
  '&.text-container': {
    position: 'relative',
    overflow: 'hidden',
    '::after': {
      transition: "all 150ms cubic-bezier(.58,-0.03,.47,1.04) 50ms",
      content: "''",
      position: 'absolute',
      top: 0,
      width: 204, // text width
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      ...(animateToRight ? { right: 0 } : { left: 0 }),
      transform: animateToRight ? 'translateX(-204px)' : 'translateX(204px)',
    },
  },
  '.arrow': {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.main,
    '::after': {
      transition: "all 150ms cubic-bezier(.58,-0.03,.47,1.04)",
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: 56, // arrow icon width
      height: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
  '&:hover, &.hover--active': {
    '&.text-container::after': {
      transform: 'translateX(0px)'
    },
    '.arrow::after': {
      transform: animateToRight ? 'translateX(56px)' : 'translateX(-56px)',
    }
  },
  '&:hover .hover--active': {
    backgroundColor: theme.palette.primary.main,
  }
})) as typeof Button;

const Link: React.FC<Props> = ({ to, children, ...rest }) => {
  return (
    <StyledButton to={to} component={RouterLink} variant="contained" {...rest}>
      <Stack
        direction="row"
        component="span"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Stack>
    </StyledButton>
  );
};

export default Link;
