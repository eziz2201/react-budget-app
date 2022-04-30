
import ExpensesItem from '../ExpensesItem/ExpensesItem'
import ExpensesList from '../ExpensesList/ExpensesList'
import Input from '../Input/Input'
import Title from '../Title/Title'
import { StyledExpenses } from './styles'

const Expenses = () => {
  return (
    <StyledExpenses>
        <Title text="Expenses"/>
        <Input placeholder='search ...'/>
        <ExpensesList>
            <ExpensesItem text={"shoping"} currency={"$"} cost={"100"}/>
        </ExpensesList>
    </StyledExpenses>
  )
}

export default Expenses