import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* STYLES */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/js/src/collapse.js";
import "bootstrap-icons/font/bootstrap-icons.css"; //Icons Bootstrap
import "./styles/sass/index.scss";

// REDUX
import { Provider } from "react-redux";

// STORE
import { chartStore } from "./store/config/storeConfig";

const chartAppStore = chartStore();
chartAppStore.subscribe(() =>
  console.log("[ noteAppStore ] State: ", chartAppStore.getState())
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={chartAppStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
