import { IEditButton } from "../../types/types";
import { StyledEditButton } from "./styles";

const EditButton = ({ children, onClick }: IEditButton) => {
  return <StyledEditButton onClick={onClick}>{children}</StyledEditButton>;
};

export default EditButton;
