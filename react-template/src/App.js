import React from "react";
import NavBarSection from "./NavBarSection";
import MastHeadSection from "./MastHeadSection";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const App = () => {
  return (
    <div>
      <NavBarSection />
      <MastHeadSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default App;
