// ----
// Dependencies
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment';


// ----
// AddTransaction functional component
export const AddTransaction = ({ formType }) => {

    // Component hooks
    const [ text, setText ] = useState( '' );
    const [ amount, setAmount ] = useState( 0.00 );
    const [ expenseType, setExpenseType ]  = useState( 'expenseBills' );
    const [ date, setDate ] = useState( moment().format( "dddd, MMMM Do YYYY" ));

    // Pulling in State / context data
    const { 
        addTransaction, updateIncomeOrExpenses, updateExpenseTypeTotal
    } = useContext( GlobalContext );

    const { 
        expenseBills, expenseRentMortgage, expenseShopping, 
        expenseEntertainment, expenseDining 
    } = useContext( GlobalContext ).expenseTypes;

    const expenseTypes = [
        expenseBills, expenseRentMortgage, 
        expenseShopping, expenseEntertainment,
         expenseDining
    ];


    // Rendering the list of expense types for select menu
    //  for when adding an expense transaction 
    const renderExpenseTypes = () => {
        return expenseTypes.map( type => {
            return (
                <option
                    key={ type.id }
                    value={ type.id }
                >
                    { type.label }
                </option>
            );
        });
    }


    // Functionality for when the form is submitted
    const onSubmit = ( event ) => {
        event.preventDefault();

        let newTransaction;

        // Checking the formType to determie the structure of the transaction
        if ( formType === 'income' ) {
            newTransaction = {
                id: Math.random().toString(16).slice(2),
                transactionType: 'income',
                text,
                date,
                amount: parseFloat( amount )
            }
        } else {
            let transactionExpenseType;
            
            expenseTypes.forEach( expense => {
                if ( expense.id === expenseType ) {
                    transactionExpenseType = expense;
                }
            });

            newTransaction = {
                id: Math.random().toString(16).slice(2),
                transactionType: 'expense',
                text,
                date,
                expenseType: transactionExpenseType.label,
                expenseTypeId: transactionExpenseType.id,
                
                amount: parseFloat( amount )
            }
        }

        // Saving the transaction
        addTransaction( newTransaction );

        // Updating totals
        if ( formType === 'income' ) {
            updateIncomeOrExpenses( 'incomeTotal', parseFloat( amount ), 'inc' );
        } else {
            updateIncomeOrExpenses( 'expensesTotal', parseFloat( amount ), 'inc' );
            updateExpenseTypeTotal( newTransaction.expenseTypeId,  amount, 'inc' );
        }

        // Resetting form values
        setText( '' );
        setAmount( 0 );
    }


    // Render Component
    return (
        <form 
            id="form" 
            className="col-lg-12 row justify-content-between align-items-center p-0 m-0 mt-4"
            onSubmit={ onSubmit }
        >
            <div className="col-lg-12 p-0 m-0 mb-1 d-block font-regular text-dark">
                {
                    formType === 'income' ?
                        'New Income Transaction'
                    :
                        'New Expense Transaction'
                }
            </div>

            <div className="m-0 p-0">
                <input 
                    type="text" 
                    placeholder="Transaction label" 
                    value={ text } 
                    onChange={ ( event ) => setText( event.target.value )}
                    aria-required={ true }
                    tabIndex={ 0 }
                    aria-label="Transaction label"
                    required
                />
            </div>

            {
                formType === 'expense' ?
                    <div className="m-0 p-0">
                        <select 
                            className="form-control d-inline w-auto"
                            onChange={( event ) => setExpenseType( event.target.value )}
                            aria-label="Expense Type"
                            tabIndex={ 0 }
                        >
                            { renderExpenseTypes() }
                        </select>
                    </div>
                :
                    ''
            }

            <div className="m-0 p-0">
                <input 
                    className="m-0"
                    type="number"  
                    placeholder="Transaction amount" 
                    value={ amount } 
                    onChange={ ( event ) => setAmount( event.target.value )}
                    aria-required={ true }
                    tabIndex={ 0 }
                    aria-label="Transaction amount"
                    required
                />
            </div>

            <div className="m-0 p-0">
                <input 
                    type="text" 
                    placeholder="Date of Transaction" 
                    value={ date } 
                    onChange={ ( event ) => setDate( event.target.value )}
                    aria-required={ true }
                    tabIndex={ 0 }
                    aria-label="Date of Transaction"
                    required
                />
            </div>

            <div className="m-0 p-0">
                <button 
                    aria-label={`Record ${ formType }`}
                    tabIndex={ 0 }
                    className="m-0 bg-purple-gradient text-uppercase text-white text-nowrap"
                >
                    record { formType }
                </button>
            </div>

        </form>
    );
}
