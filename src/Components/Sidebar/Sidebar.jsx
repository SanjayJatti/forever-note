import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-items">
        <NavLink to={"/home"} className="sidebar-menu-item">
          <i className="fas fa-sticky-note font-inherit"></i>
          <p>Notes</p>
        </NavLink >
        <NavLink to={"/labels"} className="sidebar-menu-item">
          <i className="fas fa-tag font-inherit"></i>
          <p>Labels</p>
        </NavLink >
        <NavLink to={"/archives"} className="sidebar-menu-item">
          <i className="fas fa-archive font-inherit"></i>
          <p>Archive</p>
        </NavLink >
        <NavLink to={"/trash"} className="sidebar-menu-item">
          <i className="fas fa-trash-alt font-inherit"></i>
          <p>Trash</p>
        </NavLink >
      </div>
    </div>
  );
};
export { Sidebar };
