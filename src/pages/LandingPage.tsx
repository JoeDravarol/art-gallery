import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <>
      <Typography>Landing Page</Typography>
      <Link to="/design-system">Design System</Link>
    </>
  );
};

export default LandingPage;
