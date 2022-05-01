import { ReactNode } from "react";
import { StyledEditButton } from "./styles";

interface IProps {
  children: ReactNode;
  onClick: () => void;
}

const EditButton = ({ children, onClick }: IProps) => {
  return <StyledEditButton onClick={onClick}>{children}</StyledEditButton>;
};

export default EditButton;
