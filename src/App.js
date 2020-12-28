import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import {GlobalStyle} from "./Components/UI/GlobalStyle";
import {NavBar} from "./Components/NavBar/NavBar";
import {Menu} from "./Components/Menu/Menu";
import {ModalItem} from "./Components/Modal/ModalItem";
import {Order} from "./Components/Order/Order";
import {useOpenItem} from "./Components/Hooks/useOpenItem";
import {useOrder} from "./Components/Hooks/useOrders";
import {useChoices} from "./Components/Hooks/useChoices";
import {useToppings} from "./Components/Hooks/useToppings";
import {useAuth} from "./Components/Hooks/useAuth";

const firebaseConfig = {
    apiKey: "AIzaSyC6DvggbudvFEIzMYkRo_FA0xyrsA2tk_M",
    authDomain: "sweetstory-77894.firebaseapp.com",
    projectId: "sweetstory-77894",
    storageBucket: "sweetstory-77894.appspot.com",
    messagingSenderId: "12314917336",
    appId: "1:12314917336:web:1c553e7fc7166cd634daad"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
    const auth = useAuth(firebase.auth);
    const openItem = useOpenItem();
    const orders = useOrder();
    const stateChoices = useChoices();
    const stateTopping = useToppings();


    return (
        <>
            <GlobalStyle/>
            <NavBar {...auth} />
            <Order {...auth} {...orders} {...openItem} stateChoices={stateChoices} stateTopping={stateTopping}/>
            <Menu {...openItem }  stateChoices={stateChoices} stateTopping={stateTopping}/>
            {openItem.openItem && <ModalItem {...openItem} {...orders} stateChoices={stateChoices} stateTopping={stateTopping}/>}
        </>
    );
}