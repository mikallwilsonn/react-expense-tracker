// ----
// Dependencies
import React, { Component } from 'react';


// ----
// BalanceSheet class component
class BalanceSheet extends Component {
    render() {
        return (
            <table 
                id="BalanceSheet"
                className="d-flex flex-column p-0 m-0"
            >
                <thead className="p-0 m-0"></thead>
                <tbody className="p-0 m-0">
                    <tr>
                        <td>Income</td>
                        <td className="text-green">$1900</td>
                    </tr>

                    <tr>
                        <td>Expenses</td>
                        <td className="text-red">$25</td>
                    </tr>

                    <tr>
                        <td>Current Balance</td>
                        <td className="text-black">$1800</td>
                    </tr>

                    <tr>
                        <td>Number of Transactions</td>
                        <td className="text-dark">4</td>
                    </tr>
                </tbody>

            </table>
        );
    }
}


// ----
// Export
export default BalanceSheet;
