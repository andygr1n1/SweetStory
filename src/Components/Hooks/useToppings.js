import {useState} from 'react';

export function useToppings() {

    const [selectedTopping, setTopping] = useState("");


    function checkTopping(e) {
        setTopping(e.target.value)
        console.log('check', selectedTopping)
    }

    return {selectedTopping, checkTopping, setTopping}
}