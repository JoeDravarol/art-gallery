import React from "react";
import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

const StyledButton = styled(Button)(({ theme }) => ({
  padding: 0,
  minHeight: 72,
  borderRadius: 0,
  fontSize: '1.25rem', // 20px
  alignItems: "revert",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  transition: "all 100ms ease-in-out",
  "&:hover, &.hover--active": {
    backgroundColor: theme.palette.primary.main,

    ".arrow": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
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
