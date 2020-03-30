// ----
// Dependencies
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import currencyFormatter from '../utils/currencyFormatter';


// ----
// ExpenseOverview functional component
export const ExpenseOverview = () => {

    // Pulling in state / context data
    const { 
        expenseBills, expenseRentMortgage, expenseShopping, 
        expenseEntertainment, expenseDining 
    } = useContext( GlobalContext ).expenseTypes;

    const overview = [
        expenseBills, expenseRentMortgage, 
        expenseShopping, expenseEntertainment,
         expenseDining
    ];


    // Rendering each expense type overview and its total
    const renderOverview = () => {
        return overview.map( exp => {
            return (
                <div 
                    key={ exp.id }
                    className="col-lg-12 m-0 p-0 mt-3"
                >
                    <p className="h5 font-medium mb-0 text-dark">
                        { exp.label }
                    </p>

                    <span className="mt-1 font-regular">
                        { currencyFormatter( exp.amount ) }
                    </span>
                </div>
            );
        });
    }


    // Render Component
    return (
        <div 
            id="ExpenseOverview"
            className="col-lg-12 p-0 m-0"
        >
            <h2 className="text-dark font-medium h4">
                Expense Overview
            </h2>

            { renderOverview() }
        </div>
    );
}
