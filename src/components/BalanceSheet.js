// ----
// Dependencies
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import currencyFormatter from '../utils/currencyFormatter';

// ----
// BalanceSheet class component
const BalanceSheet = () => {
    const { transactions, incomeTotal, expensesTotal } = useContext( GlobalContext );

    return (
        <table 
            id="BalanceSheet"
            className="d-flex flex-column p-0 m-0"
        >
            <thead className="p-0 m-0"></thead>
            <tbody className="p-0 m-0">
                <tr>
                    <td className="font-regular">
                        Income
                    </td>

                    <td className="text-green font-bold">
                        { currencyFormatter( parseFloat( incomeTotal )) }
                    </td>
                </tr>

                <tr>
                    <td className="font-regular">
                        Expenses
                    </td>

                    <td className="text-red font-bold">
                        { currencyFormatter( parseFloat( expensesTotal )) }
                    </td>
                </tr>

                <tr>
                    <td className="font-regular">
                        Current Balance
                    </td>

                    <td className="text-black font-bold">
                    { currencyFormatter( 
                        ( parseFloat( incomeTotal ) - parseFloat( expensesTotal ) )
                      ) 
                    }
                    </td>
                </tr>

                <tr>
                    <td className="font-regular">
                        Number of Transactions
                    </td>

                    <td className="text-dark font-bold">
                        { transactions.length }
                    </td>
                </tr>
            </tbody>
        </table>
    );
}


// ----
// Export
export default BalanceSheet;
