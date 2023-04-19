import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/icons/logo/Logo_50px.png";
import ChartContainer from "../containers/chartContainer/chartContainer";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar sticky-top navbar-container">
      {/* TOGGLE BUTTON */}
      <button
        className="nav-toggle btn-basic btn-signup"
        onClick={() => setShowLinks(!showLinks)}
      >
        <i className="navbar-toggler-icon"></i>
      </button>

      {/* LOGO */}
      <NavLink to="/home" className="nav-brand">
        <img src={logo} alt="DAN logo" width="40" />
      </NavLink>

      {/* MAIN LINKS */}
      <div className="nav-links" id={showLinks ? "show-nav" : ""}>
        <NavLink to="/home" className="nav-link">
          <i className="bi bi-house-fill"></i>
          HOME
        </NavLink>
        <NavLink to="/signup" className="nav-link">
          <i className="bi bi-person-fill-add"></i>SIGNUP
        </NavLink>
        <NavLink to="/login" className="nav-link">
          <i className="bi bi-box-arrow-in-right"></i>LOGIN
        </NavLink>
      </div>

      {/* CHART */}
      <div className="dropdown chart-link-container">
        <NavLink
          to="/chart"
          className="nav-link dropdown-toggle chart-nav-link"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-basket3-fill"></i>
          <ChartContainer></ChartContainer>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
