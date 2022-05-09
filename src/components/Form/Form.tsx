import { SubmitHandler, useForm } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { v4 as uuidv4 } from "uuid";
import Title from "../Title/Title";
import { StyledForm, StyledInputContainer, SyledInput } from "./styles";
import SubmitButton from "../SubmitButton/SubmitButton";

type FormValues = {
  name: string;
  cost: number;
};
const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { expenses, setExpenses } = useExpensesContext();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setExpenses([
      ...expenses,
      {
        id: uuidv4(),
        name: data.name,
        cost: +data.cost,
      },
    ]);
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
      <SubmitButton />
    </StyledForm>
  );
};

export default Form;
