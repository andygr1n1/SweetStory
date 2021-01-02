export const USD_CURRENCY = (price) => {
    return price.toLocaleString('en-GB', {style: 'currency', currency: 'USD'})
}

export const TOTAL_PRICE_ITEMS = order => order.price * order.count;

export const projection = rules => {
    const keys = Object.keys(rules);
    return obj => keys.reduce((newObj, key) => {
        newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null);
        return newObj;
    }, {})
}

export const TotalCalc = (orders) => {
    let priceArray = [];
    let countArray = [];
    orders.forEach(order => {
        priceArray.push(order.price * Number(order.count));
        countArray.push(Number(order.count))
    })
    return {
        priceAllOrders : priceArray.reduce((result, price) => result + price, 0),
        countAllOrders : countArray.reduce((result, count) => result + count, 0)
    }
}
