import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <>
      <div className="">
        <div className="hero-section flex-column-center gap-md">
          <h1 className="padding-sm">
            <span className="text-primary font-inherit">Forever </span>
            Note
          </h1>
          <h1>CREATE YOUR DAILY NOTES SEAMLESSLY</h1>
          <Link to="/home">
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
