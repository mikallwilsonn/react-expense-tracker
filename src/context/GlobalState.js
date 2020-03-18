// ----
// Dependencies
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// ----
// Initial State
const initialState = {
    transactions: [
        {
            amount: 175.86,
            transactionType: 'expense',
            expenseType: 'bills',
            text: 'Utility Bill',
            date: 'March 11th, 2020',
            id: 5
        },
        {
            amount: 1900.00,
            transactionType: 'income',
            text: 'Paycheque',
            date: 'March 11th, 2020',
            id: 1
        },
        {
            amount: 6.59,
            transactionType: 'expense',
            expenseType: 'food',
            text: 'John Smith\'s Diner - Breakfast',
            date: 'March 11th, 2020',
            id: 2
        },
        {
            amount: 14.99,
            transactionType: 'expense',
            expenseType: 'entertainment',
            text: 'Streaming Subscription',
            date: 'March 11th, 2020',
            id: 3
        },
        {
            amount: 3.49,
            transactionType: 'expense',
            expenseType: 'food',
            text: 'CoffeeExample - Supreme Coffee',
            date: 'March 11th, 2020',
            id: 4
        }
    ],
    incomeTotal: 1900,
    expensesTotal: 200.93
}


export const GlobalContext = createContext( initialState );

export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( AppReducer, initialState );

    // Delete Transaction
    function deleteTransaction( id ) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }


    // Add New Transaction
    function addTransaction( transaction ) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    // Update Income total
    function updateIncomeTotal( amount ) {
        dispatch({
            type: 'UPDATE_INCOME_TOTAL',
            payload: amount
        });
    }

    // Update Expenses total
    function updateExpensesTotal( amount ) {
        dispatch({
            type: 'UPDATE_EXPENSES_TOTAL',
            payload: amount
        });
    }

    // Remove Income From Total
    function removeIncomeFromTotal( amount ) {
        dispatch({
            type: 'REMOVE_INCOME_FROM_TOTAL',
            payload: amount
        });
    }

    // Remove Expense From Total
    function removeExpenseFromTotal( amount ) {
        dispatch({
            type: 'REMOVE_EXPENSE_FROM_TOTAL',
            payload: amount
        });
    }


    // ----
    return (
        <GlobalContext.Provider 
            value={{ 
                transactions: state.transactions,
                incomeTotal: state.incomeTotal,
                expensesTotal: state.expensesTotal,
                deleteTransaction,
                addTransaction,
                updateIncomeTotal,
                updateExpensesTotal,
                removeIncomeFromTotal, 
                removeExpenseFromTotal 
            }}
        >
            { children }
        </GlobalContext.Provider>
    );
}
