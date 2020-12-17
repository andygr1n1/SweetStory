import React, {useState} from "react";
import {GlobalStyle} from "./Components/GlobalStyle";
import {NavBar} from "./Components/NavBar";
import {Menu} from "./Components/Menu";
import {ModalItem} from "./Components/ModalItem";
import {Order} from "./Components/Order";

export default function App() {

    const [openItem, setOpenItem] = useState(null);
    console.log('Item', openItem )


    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <Order />
            <Menu setOpenItem={setOpenItem} />
            <ModalItem openItem={openItem} setOpenItem={setOpenItem}  />
        </>
    );
}