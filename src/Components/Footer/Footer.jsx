import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer flex-column-center gap-sm">
      <p>Made with 🤍 by Sanjay Jatti</p>
      <ul className="footer-list flex-center gap-lg font-weight-bold">
        <li>
          <Link
            to="https://twitter.com/__sanjay13"
            className="social-link"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/SanjayJatti"
            className="social-link"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/sanjay-jatti-09a176140/"
            className="social-link"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
export { Footer }
