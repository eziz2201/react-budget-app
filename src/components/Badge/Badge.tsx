import { ReactNode } from "react";
import { StyledBadge } from "./styles";

interface IBadge {
  children: ReactNode;
}

const Badge = ({ children }: IBadge) => {
  return <StyledBadge>{children}</StyledBadge>;
};

export default Badge;
