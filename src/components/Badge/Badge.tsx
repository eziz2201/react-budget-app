import { IChildren } from "../../types/types";
import { StyledBadge } from "./styles";

const Badge = ({ children }: IChildren) => {
  return <StyledBadge>{children}</StyledBadge>;
};

export default Badge;
