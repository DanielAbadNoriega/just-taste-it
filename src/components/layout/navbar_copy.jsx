import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/icons/logo/Logo_50px.png";

const Navbar = () => {
  const [isCollapse, setIsCollapse] = useState("false");

  const changeStyle = () => {
    alert(isCollapse);
    setIsCollapse(!isCollapse);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top navbar-container">
      <div className="container-fluid">
        <NavLink to="/home" className="nav-brand">
          <img src={logo} alt="DAN logo" width="40" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarJustTasteIt"
          aria-controls="navbarJustTasteIt"
          aria-expanded={isCollapse ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => changeStyle()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarJustTasteIt">
          <div className="navbar-nav">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
