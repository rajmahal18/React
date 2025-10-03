import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
    <Toaster position="bottom-right" />
  </StrictMode>
);