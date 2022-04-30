import { StyledInput } from "./styles";

interface IInput {
  placeholder: string;
}

const Input = ({ placeholder }: IInput) => {
  return <StyledInput placeholder={placeholder}></StyledInput>;
};

export default Input;
