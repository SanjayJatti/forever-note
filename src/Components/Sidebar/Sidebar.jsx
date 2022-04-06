import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-items">
        <div className=" sidebar-menu-item ">
          <i className="fas fa-sticky-note font-inherit"></i>
          <p>Notes</p>
        </div>
        <div className="sidebar-menu-item">
          <i class="fas fa-tag font-inherit"></i>
          <p>Labels</p>
        </div>
        <div className="sidebar-menu-item">
          <i class="fas fa-archive font-inherit"></i>
          <p>Archive</p>
        </div>
        <div className="sidebar-menu-item">
          <i class="fas fa-trash-alt font-inherit"></i>
          <p>Trash</p>
        </div>
        <div className="sidebar-menu-item">
          <i class="fas fa-user-circle font-inherit"></i>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};
export { Sidebar };
