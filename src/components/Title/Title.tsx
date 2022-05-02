import { ITitle } from "../../types/types";
import { StyledTitle } from "./styles";

const Title = ({ text }: ITitle) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
