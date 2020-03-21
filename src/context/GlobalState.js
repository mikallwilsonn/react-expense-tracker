// ----
// Dependencies
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import moment from 'moment';


// ----
// Initial State
const today = moment().format( "dddd, MMMM Do YYYY" );

const initialState = {
    transactions: [
        {
            amount: 175.80,
            transactionType: 'expense',
            expenseType: 'Bills',
            expenseTypeId: 'expenseBills',
            text: 'Utility Bill',
            date: today,
            id: 1
        },
        {
            amount: 1900.00,
            transactionType: 'income',
            text: 'Paycheque',
            date: today,
            id: 2
        },
        {
            amount: 1200,
            transactionType: 'expense',
            expenseType: 'Rent / Mortgage',
            expenseTypeId: 'expenseRentMortgage',
            text: 'Paid Rent',
            date: today,
            id: 6
        },
        {
            amount: 6.50,
            transactionType: 'expense',
            expenseType: 'Dining',
            expenseTypeId: 'expenseDining',
            text: 'John Smith\'s Diner - Breakfast',
            date: today,
            id: 3
        },
        {
            amount: 14.75,
            transactionType: 'expense',
            expenseType: 'Entertainment',
            expenseTypeId: 'expenseEntertainment',
            text: 'Streaming Subscription',
            date: today,
            id: 4
        },
        {
            amount: 250,
            transactionType: 'income',
            text: 'Sold some old CDs',
            date: today,
            id: 8
        },
        {
            amount: 3.50,
            transactionType: 'expense',
            expenseType: 'Dining',
            expenseTypeId: 'expenseDining',
            text: 'CoffeeExample - Supreme Coffee',
            date: today,
            id: 5
        },
        {
            amount: 125.00,
            transactionType: 'expense',
            expenseType: 'Shopping',
            expenseTypeId: 'expenseShopping',
            text: 'New Clothes',
            date: today,
            id: 7
        }
    ],
    incomeTotal: 2150,
    expensesTotal: 1524.75,
    expenseTypes: {
        'expenseBills': {
            label: 'Bills',
            id: 'expenseBills',
            amount: 175.80
        },
        'expenseRentMortgage': {
            label: 'Rent / Mortgage',
            id: 'expenseRentMortgage',
            amount: 1200
        },
        'expenseShopping': {
            label: 'Shopping',
            id: 'expenseShopping',
            amount: 125.00
        },
        'expenseEntertainment': {
            label: 'Entertainment',
            id: 'expenseEntertainment',
            amount: 14.75
        },
        'expenseDining': {
            label: 'Dining',
            id: 'expenseDining',
            amount: 10.00
        }
    }
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


    // Clear All Transactiona
    function clearTransactions() {
        dispatch({
            type: 'CLEAR_TRANSACTIONS',
            payload: true
        });
    }

    // Update Income or Expenses Totals
    function updateIncomeOrExpenses( type, amount, op ) {
        dispatch({
            type: 'UPDATE_INCOME_OR_EXPENSES_TOTAL',
            payload: {
                amount: amount,
                type: type,
                op: op
            }
        });
    }

    // Update Expense Type Total
    function updateExpenseTypeTotal( expenseType, amount, op ) {

        dispatch({
            type: 'UPDATE_EXPENSE_TYPE_TOTAL',
            payload: {
                expenseType: expenseType,
                amount: amount,
                op: op
            }
        });
    }


    // ----
    return (
        <GlobalContext.Provider 
            value={{ 
                transactions: state.transactions,
                incomeTotal: state.incomeTotal,
                expensesTotal: state.expensesTotal,
                expenseTypes: state.expenseTypes,
                deleteTransaction,
                addTransaction,
                updateIncomeOrExpenses,
                updateExpenseTypeTotal,
                clearTransactions 
            }}
        >
            { children }
        </GlobalContext.Provider>
    );
}
