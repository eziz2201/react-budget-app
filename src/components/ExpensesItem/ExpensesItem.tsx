import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import Badge from "../Badge/Badge";
import Close from "../Close/Close";
import { StyledContainer, StyledItem } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { IExpensesItem } from "../../types/types";

const ExpensesItem = ({ expense }: IExpensesItem) => {
  const { currency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <StyledItem>
      {expense.name}
      <StyledContainer>
        <Badge>
          {currency}
          {expense.cost}
        </Badge>
        <Close handleDelete={handleDelete} />
      </StyledContainer>
    </StyledItem>
  );
};

export default ExpensesItem;
