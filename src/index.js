import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
//import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);
