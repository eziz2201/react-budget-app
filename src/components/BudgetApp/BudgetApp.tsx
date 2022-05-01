import { ChangeEvent, useState } from "react";
import BudgetCard from "../BudgetCard/BudgetCard";
import BudgetInput from "../BudgetInput/BudgetInput";
import EditButton from "../EditButton/EditButton";
import CustomSelect from "../Select/CustomSelect";

import Title from "../Title/Title";
import { StyledBudgetApp, StyledContainer } from "./styles";

const BudgetApp = () => {
  const [value, setValue] = useState(3000);
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    isClick === false ? setIsClick(true) : setIsClick(false);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
  };

  return (
    <StyledBudgetApp>
      <StyledContainer>
        <Title text="Budget App" />
        <CustomSelect />
      </StyledContainer>
      <BudgetCard type={"budget"}>
        {isClick ? (
          <BudgetInput handleChange={handleChange} />
        ) : (
          `${"Budget:"} ${"$"}${value}`
        )}
        <EditButton onClick={handleClick}>
          {isClick ? "Save" : "Edit"}
        </EditButton>
      </BudgetCard>
      <BudgetCard type={"remaining"}>Remaining: ${"2000"}</BudgetCard>
      <BudgetCard type={"spent"}>Spent so far: ${"1000"}</BudgetCard>
    </StyledBudgetApp>
  );
};

export default BudgetApp;
