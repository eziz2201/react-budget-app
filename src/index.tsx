import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";

const app = document.querySelector("#root");

if (!app) {
  throw new Error(" Root element not found");
}
const root = createRoot(app);

root.render(
  <React.StrictMode>
    
      <GlobalStyles />
      <App />
    

  </React.StrictMode>
);