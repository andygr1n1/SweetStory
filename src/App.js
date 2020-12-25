import React from "react";
import {GlobalStyle} from "./Components/UI/GlobalStyle";
import {NavBar} from "./Components/NavBar/NavBar";
import {Menu} from "./Components/Menu/Menu";
import {ModalItem} from "./Components/Modal/ModalItem";
import {Order} from "./Components/Order/Order";
import {useOpenItem} from "./Components/Hooks/useOpenItem";
import {useOrder} from "./Components/Hooks/useOrders";
import {useCount} from "./Components/Hooks/useCount";
import {useChoices} from "./Components/Hooks/useChoices";

export default function App() {

    const openItem = useOpenItem();
    const orders = useOrder();
    const stateCounter = useCount(null);
    const stateChoices = useChoices("");


    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <Order {...orders} {...openItem} stateCounter={stateCounter} stateChoices={stateChoices}/>
            <Menu {...openItem } stateCounter={stateCounter}  stateChoices={stateChoices}/>
            {openItem.openItem && <ModalItem {...openItem} {...orders} stateCounter={stateCounter} stateChoices={stateChoices}/>}
        </>
    );
}