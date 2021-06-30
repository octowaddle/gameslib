import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/reset.css"
import "./stylesheets/header.css"
import "./stylesheets/typography.css"
import "./stylesheets/modal.css"
import "./stylesheets/input.css"
import "./stylesheets/button.css"
import "./stylesheets/entry.css"
import "./stylesheets/context.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
