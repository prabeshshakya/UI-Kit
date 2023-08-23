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
          to="/getting-started/#gettingstarted"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Get Started
        </NavHashLink>

        <NavHashLink
          smooth
          to="/getting-started/#nodesass"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Node-sass
        </NavHashLink>

        <NavHashLink
          smooth
          to="/getting-started/#variables"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Variables
        </NavHashLink>

        <NavHashLink
          smooth
          to="/getting-started/#breakpoints"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Breakpoints
        </NavHashLink>

        <NavHashLink
          smooth
          to="/getting-started/#colors"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Colors
        </NavHashLink>
        <NavHashLink
          smooth
          to="/getting-started/#grid"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Grid
        </NavHashLink>
        <NavHashLink
          smooth
          to="/getting-started/#imports"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Imports
        </NavHashLink>
        <NavHashLink
          smooth
          to="/getting-started/#fonts"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
          scroll={(el) => scrollWithOffset(el)}
        >
          Fonts
        </NavHashLink>
      </div>
    </div>
  );
};

export default Sidebar;
