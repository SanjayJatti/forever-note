import React from "react";
import "./Sidebar.css";
import { Link, Router } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-items">
        <Link to={"/home"} className=" sidebar-menu-item ">
          <i className="fas fa-sticky-note font-inherit"></i>
          <p>Notes</p>
        </Link >
        <Link to={"/labels"} className="sidebar-menu-item">
          <i className="fas fa-tag font-inherit"></i>
          <p>Labels</p>
        </Link >
        <Link to={"/archive"} className="sidebar-menu-item">
          <i className="fas fa-archive font-inherit"></i>
          <p>Archive</p>
        </Link >
        <Link to={"/trash"} className="sidebar-menu-item">
          <i className="fas fa-trash-alt font-inherit"></i>
          <p>Trash</p>
        </Link >
        <Link to={"/userprofile"} className="sidebar-menu-item">
          <i className="fas fa-user-circle font-inherit"></i>
          <p>Profile</p>
        </Link>
      </div>
    </div>
  );
};
export { Sidebar };
