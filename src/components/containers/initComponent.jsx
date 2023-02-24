import React from "react";
import Header from "../layout/header";

const InitComponent = () => {
  return (
    <div id="init-section" className="init-container">
      <Header></Header>
      <div className="log-container">
        <button>SIGNUP</button>
        <button>LOGIN</button>
      </div>
        <button>Skip</button>
    </div>
  );
};

export default InitComponent;
