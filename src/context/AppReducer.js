export default ( state, action ) => {
    switch( action.type ) {
        case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.filter( transaction => transaction.id !== action.payload )
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [ action.payload, ...state.transactions ]
            }
        case 'UPDATE_INCOME_TOTAL':
            return {
                ...state,
                incomeTotal: parseFloat( state.incomeTotal + action.payload )
            }
        case 'UPDATE_EXPENSES_TOTAL':
            return {
                ...state,
                expensesTotal: parseFloat( state.expensesTotal + action.payload )
            }
        case 'REMOVE_INCOME_FROM_TOTAL':
            return {
                ...state,
                incomeTotal: parseFloat( state.incomeTotal - action.payload )
            }
        case 'REMOVE_EXPENSE_FROM_TOTAL':
            return {
                ...state,
                expensesTotal: parseFloat( state.expensesTotal - action.payload )
            }
        case 'UPDATE_EXPENSE_TYPE_TOTAL':
            const prevValue = state[action.payload.expenseType].amount;

            return { 
                ...state,
                [action.payload.expenseType]amount : parseFloat( prevValue + action.payload )
            }
        default:
            return state;
    }
}
