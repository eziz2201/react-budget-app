import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import Badge from "../Badge/Badge";
import Close from "../Close/Close";
import { IExpense } from "../../context/ExpensesContext/types";

import { StyledContainer, StyledItem } from "./styles";

interface IExpensesItem {
  item: IExpense;
}

const ExpensesItem = ({ item }: IExpensesItem) => {
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(item.id);
  };

  return (
    <StyledItem>
      {item.name}
      <StyledContainer>
        <Badge>
          {"$"}
          {item.cost}
        </Badge>
        <Close handleDelete={handleDelete} />
      </StyledContainer>
    </StyledItem>
  );
};

export default ExpensesItem;
