import React, {useContext} from 'react';
import {Button} from "../UI/Button";
import {Context} from "../Functions/context";
import {NavBarStyled, NavBarControlPanel, LoginText} from "./NavBarStyled";
import {LogoSweetStory} from "../UI/LogoSweetStory";
import {UserLoggedIn} from "../UI/UserControlPanel/UserLoggedIn";

export const NavBar = () => {
    const {auth: {authentication, logIn}} = useContext(Context);
    const {orderAnimation: {openClose}} = useContext(Context);
    return (
        <NavBarStyled>
            <LogoSweetStory />
                <Button openOrder onClick={() => {openClose("orderWrap")}}/>
            <NavBarControlPanel>
                {authentication
                    ?
                    <UserLoggedIn />
                    :
                    <Button btnLogin onClick={logIn}>
                        <LoginText>Log in</LoginText>
                    </Button>}
            </NavBarControlPanel>
        </NavBarStyled>)
}
