import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-gap: 30px;
`;
export const StyledInputContainer = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const SyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #999999;
  &:focus {
    outline: none;
  }
`;
export const StyledButton = styled.button`
  background: #23c9ff;
  border-radius: 10px;
  padding: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
