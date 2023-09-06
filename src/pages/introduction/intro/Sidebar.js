import React from "react";
import { NavHashLink } from "react-router-hash-link";

const Sidebar = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className="sidebar--right">
      <div className="menu-group">
        <div className="menu-group__title">on this page</div>
        <NavHashLink
          smooth
          to="/#setup"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Setup
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#structure"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Structure
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#download"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Download
        </NavHashLink>

        <NavHashLink
          smooth
          to="/#folderstructure"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Folder Structure
        </NavHashLink>
        {/* <NavHashLink
          smooth
          to="/#filestructure"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          File Structure
        </NavHashLink> */}
      </div>
    </div>
  );
};

export default Sidebar;
