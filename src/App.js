import React from "react";
import {GlobalStyle} from "./Components/GlobalStyle";
import {NavBar} from "./Components/NavBar";
import {Menu} from "./Components/Menu";

export default function App() {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <Menu/>
        </>
    );
}