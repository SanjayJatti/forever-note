import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Header.css";
import { AUTH_TOKEN } from "../../Constants/AuthConstants";

const Header = () => {
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({
      type: AUTH_TOKEN,
      payload: null
    });
    navigate("/");
  };
  return (
    <div className="navbar-container">
      <div className="nav-link header-title">
        <Link to="/" className="text-decoration-none">
          {" "}
          <h2>
            Forever<span className="text-secondary">Note</span>
          </h2>
        </Link>
      </div>
      <div className="search-box-container">
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
      <ul className="nav-list">
        <li className="nav-item">
          {!token ? (
            <NavLink to="/login" className="nav-link">
              <button className="btn btn-primary">LogIn</button>
            </NavLink>
          ) : (
            <div className="nav-link">
              <button 
              className="btn btn-primary"
              onClick={logOutHandler}>Logout</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
export { Header };
