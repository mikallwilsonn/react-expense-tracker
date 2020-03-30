// ----
// Dependencies
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// ----
// Child Components
import { Transaction } from './Transaction';


// ----
// TransactionList functional component
export const TransactionList = () => {
    const { transactions } = useContext( GlobalContext );

    // ----
    // Check if there are transactions, if so render them
    const renderTransactions = () => {
        if ( transactions.length < 1 ) {
            return (
                <p>You currently do not have any transaction to show. Why not add one now?</p>
            );
        } else {
            return transactions.map( transaction => {
                return (
                    <Transaction 
                        key={ transaction.id } 
                        transaction={ transaction } 
                    />
                )
            });
        
        }
    }

    // Rendering the component
    return (
        <ul 
            id="list" 
            className="list p-0 m-0 mt-5 pb-5"
        >
            { renderTransactions() }
      </ul>
    )
}
