import { ReactNode } from "react";
import { Currency } from "../../config/Currency";

export interface ICurrencyContextProviderProps {
  children: ReactNode;
}

export interface ICurrencyContext {
  currency: Currency;
  setCurrency: (newCurrency: Currency) => void;
}
