import { ChangeEvent, useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import BudgetCard from "../BudgetCard/BudgetCard";
import BudgetInput from "../BudgetInput/BudgetInput";
import EditButton from "../EditButton/EditButton";
import CustomSelect from "../Select/CustomSelect";

import Title from "../Title/Title";
import { StyledBudgetApp, StyledContainer } from "./styles";

const BudgetApp = () => {
  const { expenses } = useExpensesContext();
  const { budget, setBudget } = useBudgetContext();
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    isClick === false ? setIsClick(true) : setIsClick(false);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBudget(+event.target.value);
  };

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

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
          `${"Budget:"} ${"$"}${budget}`
        )}
        <EditButton onClick={handleClick}>
          {isClick ? "Save" : "Edit"}
        </EditButton>
      </BudgetCard>
      <BudgetCard type={"remaining"}>
        Remaining: ${budget - totalExpenses}
      </BudgetCard>
      <BudgetCard type={"spent"}>
        Spent so far: ${budget - (budget - totalExpenses)}
      </BudgetCard>
    </StyledBudgetApp>
  );
};

export default BudgetApp;
