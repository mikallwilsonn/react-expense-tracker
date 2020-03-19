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

    return (
        <ul 
            id="list" 
            className="list p-0 m-0 mt-5 pb-5"
        >
            { transactions.map( transaction  => (
                <Transaction 
                    key={ transaction.id } 
                    transaction={ transaction } 
                />
            )) }

      </ul>
    )
}
