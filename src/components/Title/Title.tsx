import { StyledTitle } from "./styles";

interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
