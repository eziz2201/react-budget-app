import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import Badge from "../Badge/Badge";
import Close from "../Close/Close";
import { StyledContainer, StyledItem } from "./styles";
import { IExpense } from "../../context/ExpensesContext/types";

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
        <Badge>{expense.cost}</Badge>
        <Close handleDelete={handleDelete} />
      </StyledContainer>
    </StyledItem>
  );
};

export default ExpensesItem;
