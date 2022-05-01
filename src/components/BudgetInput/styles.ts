import styled from "styled-components";

export const StyledInput = styled.input`
  border: none;
  background-color: #7cc6fe;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
