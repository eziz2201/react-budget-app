import { createContext, useContext, useState } from "react";
import { IBudgetContext, IBudgetContextProviderProps } from "./types";

const BudgetContext = createContext<IBudgetContext>({
  budget: 0,
  setBudget: (newBudget: number) => {},
});

const useBudgetContextValue = () => {
  const [BudgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 3000,
    setBudget: (newBudget: number) => {
      setBudgetContext((ctx) => ({ ...ctx, budget: newBudget }));
    },
  }));

  return BudgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider = ({
  children,
}: IBudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
