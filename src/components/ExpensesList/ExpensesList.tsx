import React, { ReactNode } from 'react'
import { StyledList } from './styles'

interface IExpensesList {
    children: ReactNode,
}

const ExpensesList = ({children}:IExpensesList) => {
  return (
    <StyledList>
        {children}
    </StyledList>
  )
}

export default ExpensesList