import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = ({ formType }) => {

    console.log( formType );

    const [ text, setText ] = useState( '' );
    const [ amount, setAmount ] = useState( 0 );
    const [ expenseType, setExpenseType ]  = useState( 'income' );
    const [ date, setDate ] = useState( 'March 11th 2020' );
    const { addTransaction } = useContext( GlobalContext );

    const onSubmit = ( event ) => {
        event.preventDefault();

        let newTransaction;

        if ( formType === 'income' ) {
            newTransaction = {
                id: Math.floor( Math.random() * 100000000 ),
                transactionType: 'income',
                text,
                date,
                amount: parseInt( amount )
            }
        } else {
            newTransaction = {
                id: Math.floor( Math.random() * 100000000 ),
                transactionType: 'expense',
                text,
                date,
                expenseType,
                amount: parseInt( amount )
            }
        }


        console.log( newTransaction );

        addTransaction( newTransaction );

        document.querySelector( 'form#form' ).reset();
    }


    return (
        <form 
            id="form" 
            className="col-lg-12 row justify-content-between align-items-center p-0 m-0"
            onSubmit={ onSubmit }
        >
            <input 
                type="text" 
                placeholder="Enter text..." 
                value={ text } 
                onChange={ ( event ) => setText( event.target.value )}
            />

            {
                formType === 'expense' ?
                    <select onChange={( event ) => setExpenseType( event.target.value )}>
                        <option value="bills">Bills</option>
                        <option value="rent/mortage">Rent / Mortgage</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="dining">Dining</option>
                    </select>
                :
                    ''
            }


            <input 
                type="number"  
                placeholder="Enter amount..." 
                value={ amount } 
                onChange={ ( event ) => setAmount( event.target.value )}
            />

            <input 
                type="text" 
                placeholder="Enter text..." 
                value={ date } 
                onChange={ ( event ) => setDate( event.target.value )}
            />

            <button className="btn">
                Add transaction
            </button>
        </form>
    )
}
