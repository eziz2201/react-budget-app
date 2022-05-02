import { useEffect, useState } from "react";
import Select from "react-select";
import { Currency } from "../../config/Currency";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { IOption } from "../../types/types";

const options: IOption[] = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBR", label: "GBR" },
];

const CustomSelect = () => {
  const { setCurrency } = useCurrencyContext();
  const [select, setSelect] = useState("USD");
  const handleChange = (newValue: IOption | null): void => {
    if (newValue) {
      setSelect(newValue.value);
    }
  };
  useEffect(() => {
    setCurrency(
      select === "USD"
        ? Currency.USD
        : select === "EUR"
        ? Currency.EUR
        : Currency.GBR
    );
  });
  return (
    <Select
      onChange={handleChange}
      options={options}
      isMulti={false}
      defaultValue={options[0]}
      isSearchable={false}
    />
  );
};

export default CustomSelect;
