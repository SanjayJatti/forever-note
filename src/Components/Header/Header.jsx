import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="nav-link header-title">
        <Link to="/">
          {" "}
          <h2>
            Forever<span className="text-secondary">Note</span>
          </h2>
        </Link>
      </div>
      <div className="search-box-container margin-auto">
        <div className="search-box flex-center">
          <input
            className="search-txt"
            type="search"
            name="search"
            placeholder="Type to search"
          />
          <div className="search-btn flex-center">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
      <ul className="nav-list nav-social-media margin-r-xl">
      <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              <button className="btn btn-primary">LogIn</button>
            </NavLink>
          </li>
      </ul>
    </div>
  );
};
export { Header };
