// ----
// Dependencies
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

// ----
// Child Components
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import { TransactionList } from './components/TransactionList';


// ----
// App class component
class App extends Component {
    render() {
        return (
            <GlobalProvider>
                <div className="col-lg-12 p-0 m-0 row justify-content-between">
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
                        transaction makeup and charts go here
                    </div>
                </div>
            </GlobalProvider>
        );
    }
}


// ----
// Export
export default App;
