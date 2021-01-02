import {useState} from 'react';

export const useThanksForOrder = () => {
    const [thanksForOrder, setThanksForOrder] = useState(false);

    return {
        thanksForOrder,
        setThanksForOrder
    }
}