import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { ExpenseContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { GlobalStyles } from "./GlobalStyles";

const app = document.querySelector("#root");

if (!app) {
  throw new Error(" Root element not found");
}
const root = createRoot(app);

root.render(
  <React.StrictMode>
    <BudgetContextProvider>
      <ExpenseContextProvider>
        <GlobalStyles />
        <App />
      </ExpenseContextProvider>
    </BudgetContextProvider>
  </React.StrictMode>
);
