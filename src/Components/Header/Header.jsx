import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Header.css";
import { AUTH_TOKEN } from "../../Constants/AuthConstants";
import { SidebarSmallScreen } from "../Sidebar/SidebarSmallScreen";

const Header = () => {
  const [slider, setSlider] = useState(false);
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({
      type: AUTH_TOKEN,
      payload: null,
    });
    navigate("/");
  };
  return (
    <div className="navbar-container">
      <div
        className="hamburger"
        onClick={() => setSlider(!slider)}
      >
        <i className={` ${slider ? "fas fa-times" : "fas fa-bars"}`}></i>
      </div>
      {slider && <SidebarSmallScreen setSlider={setSlider}/>}
      <Link to="/" className="text-decoration-none header-title">
        <h2 className="text-primary">
          Forever<span className="text-secondary">Note</span>
        </h2>
      </Link>
      {!token ? (
    
          <button className="btn btn-primary auth-btn" onClick={()=>navigate("/login")}>LogIn</button>
     
      ) : (
        <button className="btn btn-primary auth-btn" onClick={logOutHandler}>
          Logout
        </button>
      )}
    </div>
  );
};
export { Header };
