// ----
// Dependencies
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


// ----
// ClearTransactions functional component
export const ClearTransactions = () => {

    // Pulling in state / context data
    const { 
        clearTransactions, updateIncomeOrExpenses, 
        updateExpenseTypeTotal, transactions 
    } = useContext( GlobalContext );

    const { 
        expenseBills, expenseRentMortgage, expenseShopping, 
        expenseEntertainment, expenseDining 
    } = useContext( GlobalContext ).expenseTypes;

    const expenses = [
        expenseBills, expenseRentMortgage, 
        expenseShopping, expenseEntertainment,
         expenseDining
    ];


    // Clearing all transactions and totals
    const handleClearTransactions = () => {
        clearTransactions();
        updateIncomeOrExpenses( 'incomeTotal', 0, 'clear' );
        updateIncomeOrExpenses( 'expensesTotal', 0, 'clear' );

        expenses.forEach( expense => {
            updateExpenseTypeTotal( expense.id,  0, 'clear' );
        }); 
    }


    // Returning the component
    if ( transactions.length >= 1 ) {
        return (
            <button
                id="ClearDemoDataButton"
                className="bg-dark-gradient text-white text-uppercase text-shadow font-regular mr-2"
                onClick={() => handleClearTransactions() }
                aria-label="Clear all transactions"
                tabIndex={ 0 }
            >
                Clear Transactions
            </button>
        );
    } else {
        return '';
    }
}
