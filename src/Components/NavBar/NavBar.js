import React, {useContext} from 'react';
import logoImg from "../../image/logo.png";
import loginImage from "../../image/signUp.svg"
import {Button} from "../UI/Button";
import {Context} from "../Functions/context";
import {H1} from "../UI/H1";
import {NavBarStyled, Logo, ImgLogo, LoginImg, LoginText, LogInDataUi, UserPanel, LogOutText, UserOrder} from "./NavBarStyled";

function toggleModalUserOptions() {
    document.getElementById('user__panel').classList.toggle('toggle__show');
}

export const NavBar = () => {
    const {auth: {authentication, logIn, logOut}} = useContext(Context);
    const {orderAnimation: {openClose}} = useContext(Context);

    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="logo"/>
                <H1>SweetStory</H1>
            </Logo>
            <Button openOrder onClick={() => {openClose("orderWrap")}}/>
            {authentication
                ? <Button btnLogout>
                    <LogInDataUi onClick={toggleModalUserOptions}>
                        <LoginImg src={authentication.photoURL} alt={'img'}/><LoginText>{authentication.displayName}</LoginText>
                    </LogInDataUi>
                    <UserPanel id={'user__panel'}>
                        <UserOrder onClick={() => {
                            toggleModalUserOptions();
                            openClose("orderWrap");
                        }}>My order</UserOrder>
                        <LogOutText onClick={logOut}>Log out</LogOutText>

                    </UserPanel>
                </Button>
                : <Button btnLogin onClick={logIn}>
                    <LoginText>Log in</LoginText>
                </Button>}

        </NavBarStyled>)
}
