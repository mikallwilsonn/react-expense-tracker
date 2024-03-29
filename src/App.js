// ----
// Dependencies
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';


// ----
// Child Components
import Header from './components/Header';
import { TransactionList } from './components/TransactionList';
import { ExpenseOverview } from './components/ExpenseOverview';
import { TransactionCharts } from './components/TransactionCharts';


// ----
// Context
import { GlobalProvider } from './context/GlobalState';


// ----
// App class component
class App extends Component {

    // Hiding the transaction overview when button is clicked
    hideOverview() {
        document.querySelector( '#RightPanel' ).classList.remove( 'slide-in' );
    }

    // Rendering the component
    render() {
        return (
            <GlobalProvider>
                <div 
                    data-testid="application"
                    className="col-lg-12 p-0 m-0 row justify-content-between"
                >
                    <div 
                        id="LeftPanel"
                        className="p-5 m-0"
                    >
                        <Header />

                        <TransactionList />
                    </div>

                    <div 
                        id="RightPanel"
                        className="p-5 m-0"
                    >
                        <button
                            className="bg-blue-gradient text-white text-uppercase text-shadow font-regular d-inline-block"
                            id="HideOverviewButton"
                            onClick={() => this.hideOverview()}
                            tabIndex={ 0 }
                            aria-label="Hide transactions overview"
                        >
                            Close Overview
                        </button>

                        <ExpenseOverview />

                        <TransactionCharts />
                    </div>
                </div>
            </GlobalProvider>
        );
    }
}


// ----
// Export
export default App;
