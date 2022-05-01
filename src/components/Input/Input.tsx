import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IInput {
  placeholder: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, handleSearch }: IInput) => {
  return (
    <StyledInput
      onChange={handleSearch}
      placeholder={placeholder}
    ></StyledInput>
  );
};

export default Input;
