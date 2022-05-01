import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import Badge from "../Badge/Badge";
import Close from "../Close/Close";
import { IExpense } from "../../context/ExpensesContext/types";

import { StyledContainer, StyledItem } from "./styles";

interface IExpensesItem {
  expense: IExpense;
}

const ExpensesItem = ({ expense }: IExpensesItem) => {
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <StyledItem>
      {expense.name}
      <StyledContainer>
        <Badge>
          {"$"}
          {expense.cost}
        </Badge>
        <Close handleDelete={handleDelete} />
      </StyledContainer>
    </StyledItem>
  );
};

export default ExpensesItem;
