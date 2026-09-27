import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "./assets/fonts/vazirmatn/Vazirmatn-FD-font-face.css";
import "./assets/fonts/Mj_Kids-Particles/stylesheet.css";
import "./assets/fonts/Caveat_Brush/stylesheet.css";
import "./assets/fonts/Kalam/stylesheet.css";
import "./assets/fonts/Fredericka_the_Great/stylesheet.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
