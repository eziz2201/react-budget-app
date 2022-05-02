import { IInput } from "../../types/types";
import { StyledInput } from "./styles";

const Input = ({ placeholder, handleSearch }: IInput) => {
  return (
    <StyledInput
      onChange={handleSearch}
      placeholder={placeholder}
    ></StyledInput>
  );
};

export default Input;
