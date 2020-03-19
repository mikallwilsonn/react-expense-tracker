// ----
// Dependencies
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment';


// ----
// AddTransaction functional component
export const AddTransaction = ({ formType }) => {

    const [ text, setText ] = useState( '' );
    const [ amount, setAmount ] = useState( 0 );
    const [ expenseType, setExpenseType ]  = useState( 'income' );
    const [ date, setDate ] = useState( moment().format( "dddd, MMMM Do YYYY" ));

    const { 
        addTransaction, updateIncomeTotal, updateExpensesTotal 
    } = useContext( GlobalContext );

    const onSubmit = ( event ) => {
        event.preventDefault();

        let newTransaction;

        if ( formType === 'income' ) {
            newTransaction = {
                id: Math.random().toString(16).slice(2),
                transactionType: 'income',
                text,
                date,
                amount: parseInt( amount )
            }
        } else {
            newTransaction = {
                id: Math.random().toString(16).slice(2),
                transactionType: 'expense',
                text,
                date,
                expenseType,
                amount: parseInt( amount )
            }
        }

        addTransaction( newTransaction );

        if ( formType === 'income' ) {
            updateIncomeTotal( parseInt( amount ));
        } else {
            updateExpensesTotal( parseInt( amount ));
        }

        setText( '' );
        setAmount( 0 );

        if ( formType === 'expense') {
            setExpenseType( 'bills' )
        }
    }


    return (
        <form 
            id="form" 
            className="col-lg-12 row justify-content-between align-items-center p-0 m-0 mt-4"
            onSubmit={ onSubmit }
        >
            <div className="m-0 p-0">
                <input 
                    type="text" 
                    placeholder="Enter text..." 
                    value={ text } 
                    onChange={ ( event ) => setText( event.target.value )}
                />
            </div>


            {
                formType === 'expense' ?
                    <div className="m-0 p-0">
                        <select 
                            className="form-control d-inline w-auto"
                            onChange={( event ) => setExpenseType( event.target.value )}
                        >
                            <option value="bills">
                                Bills
                            </option>

                            <option value="rent/mortage">
                                Rent / Mortgage
                            </option>

                            <option value="shopping">
                                Shopping
                            </option>

                            <option value="entertainment">
                                Entertainment
                            </option>

                            <option value="dining">
                                Dining
                            </option>
                        </select>
                    </div>

                :
                    ''
            }

            <div className="m-0 p-0">
                <input 
                    className="m-0"
                    type="number"  
                    placeholder="Enter amount..." 
                    value={ amount } 
                    onChange={ ( event ) => setAmount( event.target.value )}
                />
            </div>

            <div className="m-0 p-0">
                <input 
                    type="text" 
                    placeholder="Date of Transaction" 
                    value={ date } 
                    onChange={ ( event ) => setDate( event.target.value )}
                />
            </div>

            <div className="m-0 p-0">
                <button className="m-0 bg-purple-gradient text-uppercase text-white text-nowrap">
                    record { formType }
                </button>
            </div>

        </form>
    )
}
