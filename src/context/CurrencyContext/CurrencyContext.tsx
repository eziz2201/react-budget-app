import { createContext, useContext, useState } from "react";
import { Currency } from "../../config/Currency";
import { ICurrencyContext, ICurrencyContextProviderProps } from "./types";

const CurrencyContext = createContext<ICurrencyContext>({
  currency: Currency.USD,
  setCurrency: () => {},
});

const useCurrencyContextValue = () => {
  const [CurrencyContext, setCurrencyContext] = useState<ICurrencyContext>(
    () => ({
      currency: Currency.USD,
      setCurrency: (newCurrency: Currency) => {
        setCurrencyContext((ctx) => ({ ...ctx, currency: newCurrency }));
      },
    })
  );

  return CurrencyContext;
};

export const useCurrencyContext = () =>
  useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider = ({
  children,
}: ICurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
