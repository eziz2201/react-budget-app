import styled from "styled-components";

interface IProps {
  type: string;
}

export const SyledBudgetCard = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  height: 100px;
  padding: 20px;
  border-radius: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  background-color: ${({ type }: IProps) => {
    switch (type) {
      case "budget":
        return "rgb(124, 198, 254)";
      case "remaining":
        return "rgb(204, 213, 255)";
      case "spent":
        return "rgb(231, 187, 227)";
    }
  }};
`;
