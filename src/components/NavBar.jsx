import React from "react";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "./../images/menuIcon.png";
import contactIcon from "./../images/contactIcon.png";
import takeoutIcon from "./../images/takeoutIcon.jpg";
import $ from "jquery";

function collapseNav() {
  if ($("#navbarSupportedContent").hasClass("show")) {
    $("#navbarSupportedContent").slideUp("fast", function () {
      $("#navbarSupportedContent").removeClass("show");
      $("#navbarSupportedContent").attr("style", null);
    });
  }
}

const NavBar = () => {
  const imageStyle = { width: "20%", height: "auto" };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link to="/" className="navbar-brand" onClick={collapseNav}>
        Umi Sushi
      </Link>
      <button
        className="navbar-toggler border border-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="navbar-toggler-icon bi bi-caret-down-square-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"
          />
        </svg>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink
              exact
              to="/menu"
              className="nav-link"
              type="button"
              onClick={collapseNav}
            >
              <img src={menuIcon} style={imageStyle} alt="Menu Icon" />
              <br />
              Menu
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink
              to="/contact"
              className="nav-link"
              type="button"
              onClick={collapseNav}
            >
              <img src={contactIcon} style={imageStyle} alt="Contact Icon" />
              <br />
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink
              to="/takeout"
              className="nav-link"
              type="button"
              onClick={collapseNav}
            >
              <img src={takeoutIcon} style={imageStyle} alt="Takeout Icon" />
              <br />
              Takeout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
