import ExpensesList from "../ExpensesList/ExpensesList";

import Title from "../Title/Title";
import { StyledExpenses } from "./styles";

const Expenses = () => {
  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <ExpensesList />
    </StyledExpenses>
  );
};

export default Expenses;
