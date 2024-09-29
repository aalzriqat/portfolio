import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-links">
        <h3 className="header-link">
          <Link to="/portfolio">Home</Link>
        </h3>
        <h3 className="header-link">
          <Link to="/amthal">Amthal</Link>
        </h3>
        <h3 className="header-link">
          <Link to="/gallery">Gallery</Link>
        </h3>
        <h3 className="header-link">
          <Link to="/projects">Projects</Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;