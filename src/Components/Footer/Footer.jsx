import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer flex-column-center">
      <p>Made with 🤍 by Sanjay Jatti</p>
      <ul className="footer-list flex-center">
        <li>
          <Link
            to="https://twitter.com/__sanjay13"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/SanjayJatti"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/sanjay-jatti-09a176140/"
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
