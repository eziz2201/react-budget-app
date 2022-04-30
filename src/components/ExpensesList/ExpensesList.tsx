import React, { ReactNode, useContext } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

import ExpensesItem from "../ExpensesItem/ExpensesItem";
import { StyledList } from "./styles";

const ExpensesList = () => {
  const { expenses } = useExpensesContext();

  return (
    <StyledList>
      {expenses.map((item) => {
        return (
          <ExpensesItem
            key={item.id}
            text={item.name}
            currency={"$"}
            cost={item.cost}
          />
        );
      })}
    </StyledList>
  );
};

export default ExpensesList;
