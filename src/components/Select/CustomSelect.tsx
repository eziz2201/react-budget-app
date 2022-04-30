import React from 'react'
import Select from "react-select"

interface IOption {
  value: string, 
  label: string
}

const options: IOption[] = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBR", label: "GBR" },
];

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    fontFamily: "Inter",
    fontStyle: "Normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "15px"
  }),
};

const CustomSelect = () => {
  return (
    <Select styles={customStyles} options={options} isMulti={false} defaultValue={options[0]} isSearchable={false}/>
  )
}

export default CustomSelect;