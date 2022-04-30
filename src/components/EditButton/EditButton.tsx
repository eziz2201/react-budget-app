import React, { ReactNode } from "react";
import { StyledEditButton } from "./styles";

interface IProps {
  children: ReactNode;
}

const EditButton = ({ children }: IProps) => {
  return <StyledEditButton>{children}</StyledEditButton>;
};

export default EditButton;
