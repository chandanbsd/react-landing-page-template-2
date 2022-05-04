import React from "react";
import CabinPNG from "./assets/img/portfolio/cabin.png";
import CakePNG from "./assets/img/portfolio/cake.png";
import CircusPNG from "./assets/img/portfolio/circus.png";
import GamePNG from "./assets/img/portfolio/game.png";
import SafePNG from "./assets/img/portfolio/safe.png";
import SubmarinePNG from "./assets/img/portfolio/submarine.png";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">
          <PortfolioCard img={CabinPNG} name={"#Cabin"} />
          <PortfolioCard img={CakePNG} name={"#Cake"} />
          <PortfolioCard img={CircusPNG} name={"#Circus"} />
          <PortfolioCard img={GamePNG} name={"#Game"} />
          <PortfolioCard img={SafePNG} name={"#Safe"} />
          <PortfolioCard img={SubmarinePNG} name={"#Submarine"} />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
