import { IBudgetInput } from "../../types/types";
import { StyledInput } from "./styles";

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
