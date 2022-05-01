import Select from "react-select";

interface IOption {
  value: string;
  label: string;
}

const options: IOption[] = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBR", label: "GBR" },
];



const CustomSelect = () => {
  return (
    <Select
      options={options}
      isMulti={false}
      defaultValue={options[0]}
      isSearchable={false}
    />
  );
};

export default CustomSelect;
