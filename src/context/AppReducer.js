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
        case 'UPDATE_INCOME_OR_EXPENSES_TOTAL':
            if ( action.payload.op === 'inc' ) {
                return {
                    ...state,
                    [action.payload.type]: parseFloat( state[action.payload.type] ) + parseFloat( action.payload.amount )
                }
            } else if ( action.payload.op === 'dec' ) {
                return {
                    ...state,
                    [action.payload.type]: parseFloat( state[action.payload.type] ) - parseFloat( action.payload.amount )
                }
            } else if ( action.payload.op === 'clear' ) {
                return {
                    ...state,
                    [action.payload.type]: 0
                }
            } else {
                throw Error( `Unknown action operation provided: ${ action.payload.op }` );
            }
        case 'UPDATE_EXPENSE_TYPE_TOTAL':
            let newExpenseTypes = state.expenseTypes;
            const previousAmount = parseFloat( newExpenseTypes[action.payload.expenseType].amount );

            if ( action.payload.op === 'inc' ) {
                newExpenseTypes[action.payload.expenseType].amount = parseFloat( previousAmount ) + parseFloat( action.payload.amount );
            } else if ( action.payload.op === 'dec' ) {
                newExpenseTypes[action.payload.expenseType].amount = parseFloat( previousAmount ) - parseFloat( action.payload.amount );
            } else if ( action.payload.op === 'clear' ) {
                newExpenseTypes[action.payload.expenseType].amount = 0;
            } else {
                throw Error( `Unknown action operation provided: ${ action.payload.op }` );
            }

            return { 
                ...state,
                expenseTypes: newExpenseTypes
            }
        case 'CLEAR_TRANSACTIONS':
            return {
                ...state,
                transactions: []
            }
        default:
            return state;
    }
}
