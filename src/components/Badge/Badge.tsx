import { ReactNode } from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

import { StyledBadge } from "./styles";
interface IChildren {
  children: ReactNode;
}
const Badge = ({ children }: IChildren) => {
  const { currency } = useCurrencyContext();
  return (
    <StyledBadge>
      {currency}
      {children}
    </StyledBadge>
  );
};

export default Badge;
