import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const ClearTransactions = () => {

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


    const handleClearTransactions = () => {
        clearTransactions();

        updateIncomeOrExpenses( 'incomeTotal', 0, 'clear' );
        updateIncomeOrExpenses( 'expensesTotal', 0, 'clear' );

        expenses.forEach( expense => {
            updateExpenseTypeTotal( expense.id,  0, 'clear' );
        }); 
    }

    if ( transactions.length >= 1 ) {
        return (
            <button
                id="ClearDemoDataButton"
                className="bg-dark-gradient text-white text-uppercase text-shadow font-regular"
                onClick={() => handleClearTransactions() }
            >
                Clear Transactions
            </button>
        );
    } else {
        return '';
    }
}
