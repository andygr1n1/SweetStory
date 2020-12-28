import {useState} from 'react';

const getChecked = toppings => toppings.map(item => ({
    name: item,
    checked: false
}))

export function useCheckBox(openItem) {
    let checkBoxesList;
    openItem.toppings
        ? checkBoxesList = openItem.toppings
        : checkBoxesList = [];

    const [checkBoxes, setCheckBoxes] = useState(getChecked(checkBoxesList));

    const checkBoxesHandler = index => {
        setCheckBoxes(checkBoxes.map((item, i) => {
            const newItem = {...item}
            if (i === index) {
                newItem.checked = !newItem.checked
            }
            return newItem;
        }))
    }

    return {checkBoxes, checkBoxesHandler}
}