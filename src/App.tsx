import React from 'react'
import { StyledApp } from './AppStyles'
import BudgetApp from './components/BudgetApp/BudgetApp'
import Expenses from './components/Expenses/Expenses'


const App = () => {
  return (
    <StyledApp>
      <BudgetApp/>
      <Expenses/>
    </StyledApp>
  )
}

export default App
