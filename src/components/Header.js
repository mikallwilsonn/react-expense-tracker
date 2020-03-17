// ----
// Dependencies
import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header className="col-lg-12 d-flex flex-column p-0 m-0">
                <div className="col-lg-12 row justify-content-between m-0 p-0">
                    <h1 className="text-dark">
                        Expense Tracker
                    </h1> 

                    <div className="d-flex flex-column">
                        Income <br />
                        Expenses <br />
                        Currrent Balance <br />
                        Number of Transactions
                    </div>
                </div>

                <div className="col-lg-12 p-0 m-0">
                    <button 
                        id="AddIncomeButton"
                        className="bg-green-gradient text-white text-uppercase text-shadow mr-2"
                        onClick={() => alert( 'Adding income coming soon' )}
                    >
                        Add Income
                    </button>

                    <button
                        id="AddExpenseButton"
                        className="bg-red-gradient text-white text-uppercase text-shadow"
                        onClick={() => alert( 'Adding expense coming soon' )}
                    >
                        Add Expense
                    </button>
                </div>

            </header>
        )
    }
}


// ----
// Export
export default Header;
