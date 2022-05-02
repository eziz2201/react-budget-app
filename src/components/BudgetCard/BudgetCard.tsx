import { IBudgetCard } from "../../types/types";
import { SyledBudgetCard } from "./styles";

const BudgetCard = ({ type, children }: IBudgetCard) => {
  return <SyledBudgetCard type={type}>{children}</SyledBudgetCard>;
};

export default BudgetCard;
