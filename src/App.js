import React from "react";
import {GlobalStyle} from "./Components/UI/GlobalStyle";
import {NavBar} from "./Components/NavBar/NavBar";
import {Menu} from "./Components/Menu/Menu";
import {ModalItem} from "./Components/Modal/ModalItem";
import {Order} from "./Components/Order/Order";
import {useOpenItem} from "./Components/Hooks/useOpenItem";
import {useOrder} from "./Components/Hooks/useOrders";

export default function App() {

    const openItem = useOpenItem();
    console.log('Item', openItem )
    const orders = useOrder()


    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <Order {...orders} />
            <Menu {...openItem } />
            {openItem.openItem && <ModalItem {...openItem} {...orders}  />}
        </>
    );
}