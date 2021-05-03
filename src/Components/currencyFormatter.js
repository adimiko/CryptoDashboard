
const currencyFormatter = (value) => new Intl.NumberFormat('de-DE',{
    style: 'currency', 
    currency: 'USD'
}).format(value);

 
export default currencyFormatter;