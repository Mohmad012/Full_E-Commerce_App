import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkMode";
// basename="template_react"
ReactDOM.render(
  <BrowserRouter>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
