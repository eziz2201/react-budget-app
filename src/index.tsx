import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ExpenseContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { GlobalStyles } from "./GlobalStyles";

const app = document.querySelector("#root");

if (!app) {
  throw new Error(" Root element not found");
}
const root = createRoot(app);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ExpenseContextProvider>
      <App />
    </ExpenseContextProvider>
  </React.StrictMode>
);
