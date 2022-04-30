import React, { ReactNode } from "react";
import Badge from "../Badge/Badge";
import Close from "../Close/Close";

import { StyledContainer, StyledItem } from "./styles";

interface IExpensesItem {
  text: string;
  currency: string;
  cost: number;
}

const ExpensesItem = ({ text, currency, cost }: IExpensesItem) => {
  return (
    <StyledItem>
      {text}
      <StyledContainer>
        <Badge>
          {currency}
          {cost}
        </Badge>
        <Close />
      </StyledContainer>
    </StyledItem>
  );
};

export default ExpensesItem;
