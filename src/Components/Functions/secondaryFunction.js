export const USD_CURRENCY = (price) => {
    return price.toLocaleString('en-GB', {style: 'currency', currency: 'USD'})
}

export const TOTAL_PRICE_ITEMS = order => order.price * order.count;

// export const CkeckedToppings = (obj) => {
//     console.log('obj', obj)
//     const checkedNames = [];
//     const ckecked = obj.filter(topping => topping.checked === true);
//     ckecked.forEach(item => checkedNames.push(item.name));
//     return checkedNames.join(" ");
// };