import {useState} from 'react';

export const useIsOrderOpen = () => {
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [direction, setDirection] = useState("▶")
    const openClose = (element) => {

        const order = document.getElementById(element);
        if (isOrderOpen) {
            order.style.marginLeft = "-320px";
            setIsOrderOpen(false);
            setDirection("▶")
        } else {
            order.style.marginLeft = "0";
            setIsOrderOpen(true);
            setDirection("◀")
        }
    }

    return {isOrderOpen, setIsOrderOpen, openClose, direction}
}