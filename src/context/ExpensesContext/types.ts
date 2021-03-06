import { ReactNode } from "react";

export interface IExpenseContextProviderProps {
  children: ReactNode;
}

export interface IExpenseContext {
  expenses: IExpense[];
  setExpenses: (newExpenses: IExpense[]) => void;
  deleteExpense: (id: string) => void;
}

export interface IExpense {
  id: string;
  name: string;
  cost: number;
}
