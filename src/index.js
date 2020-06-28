import React from "react";
import ReactDOM from "react-dom";
import "./style/bootstrap.min.css";
import App from "./App";
import "./style/style.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
