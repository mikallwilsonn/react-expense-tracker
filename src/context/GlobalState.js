import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    transactions: [
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
            text: 'Johnny\'s Diner - Breakfast',
            date: 'March 11th, 2020',
            id: 2
        },
        {
            amount: 14.99,
            transactionType: 'expense',
            expenseType: 'entertainment',
            text: 'Spotify Subscription',
            date: 'March 11th, 2020',
            id: 3
        },
        {
            amount: 3.49,
            transactionType: 'expense',
            expenseType: 'food',
            text: 'CoffeeHouse Supreme Coffee',
            date: 'March 11th, 2020',
            id: 4
        }
    ]
}


export const GlobalContext = createContext( initialState );

export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( AppReducer, initialState );

    // actoin: Delete Transaction
    function deleteTransaction( id ) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }


    // action: Add Transaction
    function addTransaction( transaction ) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    // ----
    return (
        <GlobalContext.Provider 
            value={{ 
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}
        >
            { children }
        </GlobalContext.Provider>
    );
}
