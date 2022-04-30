import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Title from "../Title/Title";
import {
  StyledButton,
  StyledForm,
  StyledInputContainer,
  SyledInput,
} from "./styles";

type FormValues = {
  name: string;
  cost: number | string;
};

const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title text="Add Expense" />
      <StyledInputContainer>
        <SyledInput
          type="text"
          placeholder="enter name ..."
          {...register("name", {
            required: true,
            maxLength: 15,
          })}
        ></SyledInput>
        <SyledInput
          type="number"
          placeholder="enter cost ..."
          {...register("cost", {
            required: true,
            maxLength: 5,
          })}
        ></SyledInput>
      </StyledInputContainer>
      <StyledButton type="submit">Done</StyledButton>
    </StyledForm>
  );
};

export default Form;
