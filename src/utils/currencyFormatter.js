function currencyFormatter(value,currency="USD") {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: `${currency}`,
        minimumFractionDigits: 0,
    });

    return formatter.format(value);
}

function mFormatter(num,currency) {
    let result = Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) : Math.sign(num)*Math.abs(num);
    return Math.abs(num) > 999999 ? currencyFormatter(result,currency) + ' Million' : currencyFormatter(result,currency);
}

export { currencyFormatter, mFormatter };