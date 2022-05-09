import { ReactNode } from "react";
import { StyledEditButton } from "./styles";

interface IEditButton {
  children: ReactNode;
  onClick: () => void;
}
const EditButton = ({ children, onClick }: IEditButton) => {
  return <StyledEditButton onClick={onClick}>{children}</StyledEditButton>;
};

export default EditButton;
