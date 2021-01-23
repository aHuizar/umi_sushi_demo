import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";

function handleMapClick() {
  window.open(
    "https://www.google.com/maps/dir//35.3235475,-119.1265647/@35.323547,-119.126565,17z?hl=en",
    "_blank"
  );
}

ReactDOM.render(
  <Router>
    <App onMapClick={handleMapClick} />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
