import { ChangeEvent, ReactNode } from "react";
import { IExpense } from "../context/ExpensesContext/types";

export  interface IChildren {
    children: ReactNode;
}
export interface IBudgetCard {
    type: string;
    children?: ReactNode;
}
export interface IBudgetInput {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface IClose {
    handleDelete: () => void;
}
export interface IOption {
    value: string;
    label: string;
}
export interface IEditButton {
    children: ReactNode;
    onClick: () => void;
}
export interface IExpensesItem {
    expense: IExpense;
}
export type FormValues = {
    name: string;
    cost: number;
};
export interface IInput {
    placeholder: string;
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface ITitle {
    text: string;
}