import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import {GlobalStyle} from "./Components/UI/GlobalStyle";
import {NavBar} from "./Components/NavBar/NavBar";
import {Menu} from "./Components/Menu/Menu";
import {ModalItem} from "./Components/Modal/ModalItem";
import {Order} from "./Components/Order/Order";
import {OrderConfirm} from "./Components/Order/OrderConfirm";
import {Footer} from "./Components/Footer/Footer";
import {Context} from "./Components/Functions/context";
import {useOpenItem} from "./Components/Hooks/useOpenItem";
import {useOrder} from "./Components/Hooks/useOrders";
import {useChoices} from "./Components/Hooks/useChoices";
import {useToppings} from "./Components/Hooks/useToppings";
import {useAuth} from "./Components/Hooks/useAuth";
import {useTitle} from "./Components/Hooks/useTitle";
import {useOrderConfirm} from "./Components/Hooks/useOrderConfirm";
import {useIsOrderOpen} from "./Components/Hooks/useIsOrderOpen";


const firebaseConfig = {
    apiKey: "AIzaSyDCflW-_hCyfBIHn__an4ERfdQsmBT_L4E",
    authDomain: "sweetstory-ba648.firebaseapp.com",
    databaseURL: "https://sweetstory-ba648-default-rtdb.firebaseio.com",
    projectId: "sweetstory-ba648",
    storageBucket: "sweetstory-ba648.appspot.com",
    messagingSenderId: "356908603608",
    appId: "1:356908603608:web:c7c018a16416de068ddfad"

};
firebase.initializeApp(firebaseConfig);

export default function App() {
    const auth = useAuth(firebase.auth);
    const openItem = useOpenItem();
    const orders = useOrder();
    const stateChoices = useChoices();
    const stateTopping = useToppings();
    const orderConfirm = useOrderConfirm();
    useTitle(openItem.openItem);
    const orderAnimation = useIsOrderOpen();

    const database = firebase.database();

    return (
        <Context.Provider value={{
            auth,
            openItem,
            orders,
            orderConfirm,
            database,
            stateChoices,
            stateTopping,
            orderAnimation,
        }}>
            <GlobalStyle />
            <NavBar />
            <Order />
            <Menu />
            {openItem.openItem && <ModalItem />}
            {orderConfirm.openOrderConfirm && <OrderConfirm />}
            <Footer />
        </Context.Provider>
    );
}