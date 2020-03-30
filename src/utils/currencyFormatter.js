// ----
// formating the values into $$$ currency
export default ( value ) => {
    const formatter = new Intl.NumberFormat( 'en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    return formatter.format( value )
}
