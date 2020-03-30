// ----
// Dependencies
import React, { Component } from 'react';

// ----
// Child Components
import BalanceSheet from './BalanceSheet';
import { AddTransaction } from './AddTransaction';
import { ClearTransactions } from './ClearTransactions';
import { ViewOverviewButton } from './ViewOverviewButton';


// ----
// Header class component
class Header extends Component {
    constructor() {
        super();
        this.state = { formToDisplay: null }
    }


    // ----
    // Set Form To Display
    setFormToDisplay( type ) {
        if ( type === this.state.formToDisplay ) {
            this.setState({ formToDisplay: null });
        } else {
            this.setState({ 
                formToDisplay: type, 
            });
        }
    }


    // ----
    // Render Transaction Form
    renderTransactionForm() {
        if ( this.state.formToDisplay !== null ) {
            return <AddTransaction formType={ this.state.formToDisplay } />;
        } else {
            return '';
        }
    }


    // ----
    // Render Component
    render() {
        return (
            <header className="col-lg-12 d-flex flex-column p-0 m-0">
                <div className="col-lg-12 row justify-content-between m-0 p-0">
                    <div>
                        <h1 className="text-dark font-bold">
                            Expense Tracker
                        </h1>

                        <span className="text-dark font-regular">
                            Created by <a href="http://github.com/mikallwilsonn" target="_blank" rel="noopener noreferrer">Michael R. Wilson</a>.
                        </span> 
                    </div>


                    <BalanceSheet />
                </div>

                <div 
                    id="TransactionButtonWrapper"
                    className="col-lg-12 p-0 m-0 mt-3"
                >
                    <button 
                        id="AddIncomeButton"
                        className="bg-green-gradient text-white text-uppercase text-shadow mr-2 font-regular"
                        onClick={() => this.setFormToDisplay( 'income' )}
                        tabIndex={ 0 }
                        aria-label="Add new income transaction"
                    >
                        Add Income
                    </button>

                    <button
                        id="AddExpenseButton"
                        className="bg-red-gradient text-white text-uppercase text-shadow font-regular mr-2"
                        onClick={() => this.setFormToDisplay( 'expense' )}
                        tabIndex={ 0 }
                        aria-label="Add new expense transaction"
                    >
                        Add Expense
                    </button>

                    <ClearTransactions />

                    <ViewOverviewButton />
                </div>

                <div className="col-lg-12 p-0 m-0">
                    { this.renderTransactionForm() }
                </div>

            </header>
        )
    }
}


// ----
// Export
export default Header;
