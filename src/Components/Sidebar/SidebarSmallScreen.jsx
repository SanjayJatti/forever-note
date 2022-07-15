import { NavLink } from "react-router-dom"

const SidebarSmallScreen = ({setSlider})=> {
  return (
<div className="sidebar-small-screen">
          <div className="sidebar-small-screen-items">
            <NavLink
              to={"/home"}
              className="sidebar-small-screen-menu-item"
              onClick={() => setSlider(false)}
            >
              <i className="fas fa-sticky-note font-inherit"></i>
              <p>Notes</p>
            </NavLink>
            <NavLink
              to={"/labels"}
              className="sidebar-small-screen-menu-item"
              onClick={() => setSlider(false)}
            >
              <i className="fas fa-tag font-inherit"></i>
              <p>Labels</p>
            </NavLink>
            <NavLink
              to={"/archives"}
              className="sidebar-small-screen-menu-item"
              onClick={() => setSlider(false)}
            >
              <i className="fas fa-archive font-inherit"></i>
              <p>Archive</p>
            </NavLink>
            <NavLink
              to={"/trash"}
              className="sidebar-small-screen-menu-item"
              onClick={() => setSlider(false)}
            >
              <i className="fas fa-trash-alt font-inherit"></i>
              <p>Trash</p>
            </NavLink>
          </div>
        </div>
  )
}
export { SidebarSmallScreen }