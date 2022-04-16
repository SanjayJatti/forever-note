import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <>
      <div className="landing-page-container">
        <div className="hero-section flex-column-center">
          <h2 className="hero-title">
            <span className="text-primary font-inherit">FOREVER </span>
            NOTE
          </h2>
          <h2>CREATE YOUR DAILY NOTES SEAMLESSLY</h2>
          <Link to="/home" className="text-decoration-none">
            <button className="btn btn-primary btn-large">
              <h3>Get Started</h3>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
