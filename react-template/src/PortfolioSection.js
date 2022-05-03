import React from "react";
import CabinPNG from "./assets/img/portfolio/cabin.png";
import CakePNG from "./assets/img/portfolio/cake.png";
import CircusPNG from "./assets/img/portfolio/circus.png";
import GamePNG from "./assets/img/portfolio/game.png";
import SafePNG from "./assets/img/portfolio/safe.png";
import SubmarinePNG from "./assets/img/portfolio/submarine.png";

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
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal1"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={CabinPNG} alt="..." />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal2"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={CakePNG} alt="..." />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal3"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={CircusPNG} alt="..." />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal4"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={GamePNG} alt="..." />
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal5"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={SafePNG} alt="..." />
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal6"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={SubmarinePNG} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
