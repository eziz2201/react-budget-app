import { StyledInput } from "./styles";

interface IInput {
  placeholder: string;
  handleSearch: () => void
}

const Input = ({ placeholder, handleSearch }: IInput) => {
  return <StyledInput onChange={handleSearch} placeholder={placeholder}></StyledInput>;
};

export default Input;
