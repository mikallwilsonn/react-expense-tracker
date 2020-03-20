// ----
// Dependencies
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import currencyFormatter from '../utils/currencyFormatter';


// ----
// Child Components
import { DebitIcon } from './DebitIcon';
import { CreditIcon } from './CreditIcon';


// ----
// Transaction functional component
export const Transaction = ({ transaction }) => {

    const { 
        deleteTransaction, removeIncomeFromTotal, removeExpenseFromTotal, updateExpenseTypeTotal 
    } = useContext( GlobalContext );

    let sign;

    if ( transaction.transactionType === 'income' ) {
        sign = '+';
    } else {
        sign = '-';
    }

    // Render Transaction Icon
    const renderTransactionIcon = () => {
        if ( transaction.transactionType === 'income' ) {
            return <DebitIcon />;
        } else {
            return <CreditIcon />;
        }
    }


    // Handle Transaction Deletion
    const handleTransactionDeletion = () => {
        deleteTransaction( transaction.id );

        if ( transaction.transactionType === 'income' ) {
            removeIncomeFromTotal( parseFloat( transaction.amount ));
        } else {
            removeExpenseFromTotal( parseFloat( transaction.amount ));
            updateExpenseTypeTotal( transaction.expenseTypeId, transaction.amount, 'dec' );
        }
    }


    // Render Component
    return (
        <li className="transaction p-0 row mt-2">
            <div className={`transaction__icon transaction__icon-${transaction.transactionType} row justify-content-center align-items-center p-0 m-0`}>
                { renderTransactionIcon() }
            </div>

            <div className="transaction__details row justify-content-between align-items-center m-0 p-0">
                <div className="d-flex flex-column justify-content-center pl-5">
                    <span className="transaction__details--date font-regular">
                        { transaction.date } 
                    </span>

                    <p className="transaction__details--label h4 font-bold">
                        { transaction.text } <span className="transaction__details--date font-regular h6">{ transaction.expenseType ? `- ${transaction.expenseType }` : '' }</span>
                    </p>
                </div>

                <div className="row align-items-center m-0 p-0 pr-5">
                    <span className={`transaction__amount transaction__amount-${transaction.transactionType} p-0 m-0 mr-5 h5 font-bold`}>
                        { sign }{ currencyFormatter( transaction.amount ) }
                    </span>

                    <button 
                        className="transaction__delete-button p-0 m-0 row justify-content-center align-items-center"
                        onClick={() => handleTransactionDeletion( transaction.id )}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="500" 
                            height="500" 
                            viewBox="0 0 500 500"
                        >
                            <path 
                                id="close" 
                                d="M660.5,210.835,460.835,410.5,660.5,610.164,610.164,660.5,410.5,460.835,210.835,660.5,160.5,610.164,360.164,410.5,160.5,210.835,210.835,160.5,410.5,360.164,610.164,160.5Z" 
                                transform="translate(-160.5 -160.5)" 
                                fill="#909090"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    );
}
