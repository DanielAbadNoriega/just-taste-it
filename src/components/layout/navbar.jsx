import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/icons/logo/Logo_50px.png";

const Navbar = () => {
  const [isCollapse, setIsCollapse] = useState("false");

  const changeStyle = () => {
    alert(isCollapse);
    setIsCollapse(!isCollapse);
  };

  const [showLinks, setShowLinks] = useState(false);

  return (
    /*     <nav className="navbar sticky-top navbar-container">
      <NavLink to="/home" className="nav-brand">
        <img src={logo} alt="DAN logo" width="40" />
      </NavLink>
      <NavLink to="/home" className="nav-link">
        <i className="bi bi-house-fill">HOME</i>
      </NavLink>
      <NavLink to="/signup" className="nav-link">
        <i className="bi bi-person-fill-add">SIGNUP</i>
      </NavLink>
      <NavLink to="/login" className="nav-link">
        <i className="bi bi-box-arrow-in-right">LOGIN</i>
      </NavLink>
      <NavLink to="/chart" className="nav-link">
        <i className="bi bi-basket3-fill">CHART</i>
      </NavLink>
    </nav> */

    <nav className="navbar sticky-top navbar-container">
      <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
        <i className="navbar-toggler-icon"></i>
      </button>
        <NavLink to="/home" className="nav-brand">
          <img src={logo} alt="DAN logo" width="40" />
        </NavLink>
      <div className="nav-links" id={showLinks ? "show-nav" : ""}>
        <NavLink to="/home" className="nav-link">
          <i className="bi bi-house-fill">HOME</i>
        </NavLink>
        <NavLink to="/signup" className="nav-link">
          <i className="bi bi-person-fill-add">SIGNUP</i>
        </NavLink>
        <NavLink to="/login" className="nav-link">
          <i className="bi bi-box-arrow-in-right">LOGIN</i>
        </NavLink>
        <NavLink to="/chart" className="nav-link">
          <i className="bi bi-basket3-fill">CHART</i>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
