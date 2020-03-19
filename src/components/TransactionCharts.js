// ----
// Dependencies
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Doughnut } from 'react-chartjs-2';
//import currencyFormatter from '../utils/currencyFormatter';


// ----
// Child Components


// ----
// TransactionCharts functional component
export const TransactionCharts = () => {
    const { incomeTotal, expensesTotal } = useContext( GlobalContext );


    // Render Transactions Chart
    const renderTransactionsChart = () => {
        let data = [ 250, 1050, 125.50, 75, 45 ];
        let labels = [ 'Bills', 'Rent / Mortgage', 'Shopping', 'Entertainment', 'Dining' ];
        let backgroundColor = [ '#FF3C41', '#AE63E4', '#FCD000', '#0EBEFF', '#707070' ];


        const chartData = {
            labels, 
            datasets: [{
                label: "Transactions",
                data,
                backgroundColor,
                borderColor: [
                    '#FFF',
                ],
                borderWidth: 2
            }]
        }

        return (
            <Doughnut 
                data={ chartData } 
                width={100}
                options={{
                    maintainAspectRatio: true,
                    legend: {
                        labels: {
                            fontColor: '#000',
                            fontSize: 16, 
                            boxWidth: 25,
                            padding: 20,
                            fontFamily: 'Lato'
                        },
                        position: 'bottom',
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    }
                }}
            />
        );
    }


    // Render IVE Chart
    const renderIVEChart = () => {
        let data = [ incomeTotal, expensesTotal ];
        let labels = [ 'Income', 'Expenses' ];
        let backgroundColor = [ '#47CF73', '#FF3C41' ];


        const chartData = {
            labels, 
            datasets: [{
                label: "Income vs. Expenses",
                data,
                backgroundColor,
                borderColor: [
                    '#FFF',
                ],
                borderWidth: 2
            }]
        }

        return (
            <Doughnut 
                data={ chartData } 
                width={100}
                options={{
                    maintainAspectRatio: true,
                    legend: {
                        labels: {
                            fontColor: '#000',
                            fontSize: 16, 
                            boxWidth: 25,
                            padding: 20,
                            fontFamily: 'Lato'
                        },
                        position: 'bottom',
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    }
                }}
            />
        );
    }


    // Render Component
    return (
        <div className="col-lg-12 m-0 p-0 mt-3 row justify-content-space-between align-items-center flex-wrap">
            <ul 
                className="col-lg-12 nav nav-pills m-0 p-2 mb-3 bg-light" 
                id="pills-tab" 
                role="tablist"
            >
                <li className="nav-item col-lg-6 text-center">
                    <a 
                        className="nav-link active font-medium" 
                        id="transactions-tab" 
                        data-toggle="pill" 
                        href="#pills-transactions" 
                        role="tab" 
                        aria-controls="pills-transactions" 
                        aria-selected="true" 
                    >
                        Expenses
                    </a>
                </li>

                <li className="nav-item col-lg-6 text-center">
                    <a 
                        className="nav-link font-medium" 
                        id="pills-ive-tab" 
                        data-toggle="pill" 
                        href="#pills-ive" 
                        role="tab" 
                        aria-controls="pills-ive" 
                        aria-selected="false" 
                    >
                        I vs. E
                    </a>
                </li>
            </ul>

            <div 
                className="tab-content col-lg-12" 
                id="pills-tabContent"
            >
                <div 
                    className="col-lg-12 tab-pane fade show active"  
                    id="pills-transactions" 
                    role="tabpanel" 
                    aria-labelledby="transactions-tab"
                >
                    { renderTransactionsChart() }
                </div>

                <div 
                    className="col-lg-12 tab-pane fade" 
                    id="pills-ive" 
                    role="tabpanel" 
                    aria-labelledby="ive-tab" 
                >
                    { renderIVEChart() }
                </div>
            </div>
        </div>
    );
}
