import { ChangeEvent, useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

import ExpensesItem from "../ExpensesItem/ExpensesItem";
import Input from "../Input/Input";
import { StyledList } from "./styles";

const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  const [searchValue, setSearchValue] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [expenses, searchValue]);
  return (
    <StyledList>
      <Input handleSearch={handleSearch} placeholder="search ..." />
      {filteredExpenses.map((expense) => {
        return <ExpensesItem key={expense.id} expense={expense} />;
      })}
    </StyledList>
  );
};

export default ExpensesList;
