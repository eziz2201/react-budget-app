import { ChangeEvent } from "react";
import { StyledInput } from "./styles";
export interface IBudgetInput {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BudgetInput = ({ handleChange }: IBudgetInput) => {
  return (
    <StyledInput
      type="number"
      onChange={handleChange}
      placeholder="Enter  budget ..."
    />
  );
};

export default BudgetInput;
