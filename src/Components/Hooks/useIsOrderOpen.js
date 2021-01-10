import {useState, useEffect} from 'react';

export const useIsOrderOpen = () => {
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [direction, setDirection] = useState("▶");


    const [dimensions, setDimensions] = useState(window.innerWidth);
    useEffect(() => {
        const fixOrder = document.getElementById("orderWrap");
        function handleResize() {
            setDimensions(window.innerWidth)
        }
        if(dimensions <= 550) {
            fixOrder.style.maxWidth = `${dimensions}px`
            fixOrder.style.marginLeft = `-${dimensions - 29}px`
        } else {
            fixOrder.style.maxWidth = `414px`
            fixOrder.style.marginLeft = `-385px`
        }
        window.addEventListener('resize', handleResize)
        if(dimensions <= 550) {
            document.getElementById("orderWrap").style.maxWidth = `${dimensions}px`
        } else {
            document.getElementById("orderWrap").style.maxWidth = `414px`
        }
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    },[dimensions])



    const openClose = (element) => {
        const order = document.getElementById(element);
        if (isOrderOpen) {
            dimensions < 550 ? order.style.marginLeft = `-${dimensions - 29}px` : order.style.marginLeft = `-385px` ;
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