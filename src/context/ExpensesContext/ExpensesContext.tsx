import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  IExpense,
  IExpenseContext,
  IExpenseContextProviderProps,
} from "./types";

const ExpensesContext = createContext<IExpenseContext>({
  expenses: [],
  setExpenses: (newExpenses: IExpense[]) => {},
});

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(
    () => ({
      expenses: [],
      setExpenses: (newExpenses: IExpense[]) => {
        setExpensesContext((ctx) => ({ ...ctx, expenses: newExpenses }));
      },
    })
  );

  return expensesContext;
};

export const useExpensesContext = () =>
  useContext<IExpenseContext>(ExpensesContext);

export const ExpenseContextProvider = ({
  children,
}: IExpenseContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
