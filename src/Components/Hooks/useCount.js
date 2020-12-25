import { useState } from 'react';

export function useCount(orderListItemCount) {
    console.log(orderListItemCount)
    let initial;
    orderListItemCount
        ? initial = orderListItemCount
        : initial =  1;

    const [count, setCount] = useState("");

    const onChange = e => setCount(e.target.value);

    return { count, setCount, onChange }
}