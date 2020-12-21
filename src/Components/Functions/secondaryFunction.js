export const USD_CURRENCY = (price) => {
    return price.toLocaleString('en-GB', {style: 'currency', currency: 'USD'})
}

export const TOTAL_PRICE_ITEMS = order => order.price * order.count;