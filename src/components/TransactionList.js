import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Transaction } from './Transaction';

export const TransactionList = () => {

    const { transactions } = useContext( GlobalContext );

    return (
        <ul 
            id="list" 
            className="list p-0 m-0 mt-5"
        >
            { transactions.map( transaction  => (
                <Transaction 
                    key={transaction.id} 
                    transaction={ transaction } 
                />
            )) }

      </ul>
    )
}
