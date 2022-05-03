import React from "react";
import NavBarSection from "./NavBarSection";
import MastHeadSection from "./MastHeadSection";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import CopyrightSection from "./CopyrightSection";

const App = () => {
  return (
    <div>
      <NavBarSection />
      <MastHeadSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <CopyrightSection />
    </div>
  );
};

export default App;
