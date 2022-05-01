
import { useEffect } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

import ExpensesItem from "../ExpensesItem/ExpensesItem";
import Input from "../Input/Input";
import { StyledList } from "./styles";

const ExpensesList = () => {
  const { expenses } = useExpensesContext();

  const handleSearch = () => {

  }

  return (
    <StyledList>
      <Input handleSearch={handleSearch} placeholder="search ..." />
      {expenses.map((item) => {
        return (
          <ExpensesItem
            key={item.id}
            item={item}

          />
        );
      })}
    </StyledList>
  );
};

export default ExpensesList;
