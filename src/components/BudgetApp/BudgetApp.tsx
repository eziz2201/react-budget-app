import BudgetCard from "../BudgetCard/BudgetCard";
import EditButton from "../EditButton/EditButton";
import CustomSelect from "../Select/CustomSelect";

import Title from "../Title/Title";
import { StyledBudgetApp, StyledContainer } from "./styles";

const BudgetApp = () => {
  return (
    <StyledBudgetApp>
      <StyledContainer>
        <Title text="Budget App" />
        <CustomSelect />
      </StyledContainer>
      <BudgetCard type={"budget"}>
        Budget: ${"3000"}
        <EditButton>Edit</EditButton>
      </BudgetCard>
      <BudgetCard type={"remaining"}>Remaining: ${"2000"}</BudgetCard>
      <BudgetCard type={"spent"}>Spent so far: ${"1000"}</BudgetCard>
    </StyledBudgetApp>
  );
};

export default BudgetApp;
