import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  IExpense,
  IExpenseContext,
  IExpenseContextProviderProps,
} from "./types";

const ExpensesContext = createContext<IExpenseContext>({
  expenses: [],
  setExpenses: (newExpenses: IExpense[]) => { },
  deleteExpense: (id: string) => { },
});

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(
    () => ({
      expenses: [
        { id: uuidv4(), name: "shopping", cost: 100 },
      ],
      setExpenses: (newExpenses: IExpense[]) => {
        setExpensesContext((ctx) => ({ ...ctx, expenses: newExpenses }));
      },
      deleteExpense: (id: string) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: ctx.expenses.filter((expense) => expense.id !== id),
        }));
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


