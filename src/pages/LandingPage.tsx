import React from "react";

import Hero from "features/Hero";
import About from "features/About";
import Footer from "features/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Footer defaultIconColor />
    </>
  );
};

export default LandingPage;
