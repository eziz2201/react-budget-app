import React from "react";
import { StyledApp } from "./AppStyles";
import BudgetApp from "./components/BudgetApp/BudgetApp";
import Expenses from "./components/Expenses/Expenses";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <StyledApp>
      <BudgetApp />
      <Expenses />
      <Form />
    </StyledApp>
  );
};

export default App;
