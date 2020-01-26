import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; //don't need to specify localhost url in axios http address
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
ReactDOM.render(
  <Router>
    <App history={history} />
  </Router>,
  document.getElementById("root")
);
