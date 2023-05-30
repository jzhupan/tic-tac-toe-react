import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Title from "./Header";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Title />
    <App />
  </StrictMode>
);
