import React, { ReactNode } from "react";
import { SyledBudgetCard } from "./styles";

interface IBudgetCard {
  type: string;
  children?: ReactNode;
}

const BudgetCard = ({ type, children }: IBudgetCard) => {
  return <SyledBudgetCard type={type}>{children}</SyledBudgetCard>;
};

export default BudgetCard;
