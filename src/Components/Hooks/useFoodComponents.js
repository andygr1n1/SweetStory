import {useState} from 'react';

const getComponents = components => components.map(item => ({
    name: item,
    checked: false,
}));

function useFoodComponents(openItem){
    const pushInit = openItem.fComponents ? openItem.fComponents : openItem.foodComponents ? getComponents(openItem.foodComponents) : [];
    const [foodComponents, setFoodComponents] = useState(pushInit);

    const checkFoodComponents =  (index) => {
        setFoodComponents(foodComponents.map((item, idx) => {
            if (idx === index) {
                item.checked = !item.checked;
            }
            return item;
        }));
    }

    return {foodComponents, checkFoodComponents}
}

export default useFoodComponents;