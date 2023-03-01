import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../layout/header";
import background_colorful from "../../../assets/images/backgrounds/bg_colorful.jpg";
/* import background from "../../../assets/images/backgrounds/msgBgDark.jpg"; */

const InitComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("[ Init Component ] Location: ", location.pathname);

  let body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = `url(${background_colorful})`;

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div id="init-section" className="init-container">
      <Header></Header>
      <p>Quick flavors for your cravings.</p>
      <div className="log-container">
        <button className="btn btn-lg btn-basic btn-signup">SIGNUP</button>
        <button className="btn btn-lg btn-basic btn-login">LOGIN</button>
      </div>
      <button
        className="btn btn-lg btn-basic btn-skip"
        onClick={() => goTo("/home")}
      >
        Skip<i className="bi bi-chevron-double-right"></i>
      </button>
    </div>
  );
};

export default InitComponent;
