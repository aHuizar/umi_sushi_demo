import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "./../images/menuIcon.png";
import contactIcon from "./../images/contactIcon.png";
import takeoutIcon from "./../images/takeoutIcon.jpg";

const NavBar = () => {
  const navLinkStyle = { color: "ghostwhite", textAlign: "center" };
  const imageStyle = { width: "20%", height: "auto" };
  return (
    <nav className="site-header sticky-top py-1 bg-dark">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <span className="py-2" aria-label="Product" title="Umi Sushi">
          <Link to="/umi_sushi_demo">
            <h1 style={navLinkStyle}>Umi Sushi</h1>
          </Link>
        </span>
        <span className="py-2 d-none d-md-inline-block">
          <Link to="/umi_sushi_demo/menu" style={navLinkStyle}>
            <img src={menuIcon} style={imageStyle} alt="Menu Icon" />
            <br />
            Menu
          </Link>
        </span>
        <span className="py-2 d-none d-md-inline-block">
          <Link to="/umi_sushi_demo/contact" style={navLinkStyle}>
            <img src={contactIcon} style={imageStyle} alt="Contact Icon" />
            <br />
            Contact Us
          </Link>
        </span>
        <span className="py-2 d-none d-md-inline-block">
          <Link to="/umi_sushi_demo/takeout" style={navLinkStyle}>
            <img src={takeoutIcon} style={imageStyle} alt="Takeout Icon" />
            <br />
            Takeout
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
