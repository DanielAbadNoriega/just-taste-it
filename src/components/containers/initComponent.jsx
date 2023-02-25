import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/header";

const InitComponent = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  }

  return (
    <div id="init-section" className="init-container">
      <Header></Header>
      <p>Quick flavors for your cravings.</p>
      <div className="log-container">
        <button className="btn btn-lg btn-basic  btn-signup">SIGNUP</button>
        <button className="btn btn-lg btn-basic btn-login">LOGIN</button>
      </div>
      <button className="btn btn-lg btn-basic btn-skip"  onClick={() => goTo("/home")}>
        Skip<i className="bi bi-chevron-double-right"></i>
      </button>
    </div>
  );
};

export default InitComponent;