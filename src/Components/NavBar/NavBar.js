import React, {useContext} from 'react';
import logoImg from "../../image/logo.png";
import loginImage from "../../image/signUp.svg"
import {Button} from "../UI/Button";
import {Context} from "../Functions/context";
import {H1} from "../UI/H1";
import {NavBarStyled, Logo, ImgLogo, LoginImg, LoginText, LogInDataUi, UserPanel, LogOutText} from "../UI/NavBarStyled";

function toggleModalUserOptions(event) {
    const target = event.target;
    console.log(target)
    console.log('click')
    const modal = document.getElementById('user__panel');
    modal.classList.toggle('toggle__show');
}

export const NavBar = () => {
    const {auth: {authentication, logIn, logOut}} = useContext(Context);

    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="logo"/>
                <H1>SweetStory</H1>
            </Logo>
            {authentication
                ? <Button btnLogout>
                    <LogInDataUi onClick={toggleModalUserOptions}>
                        <LoginImg src={authentication.photoURL} alt={'img'}/><LoginText>{authentication.displayName}</LoginText>
                    </LogInDataUi>
                    <UserPanel id={'user__panel'}>
                        <LogOutText onClick={logOut}>Log out</LogOutText>
                    </UserPanel>
                </Button>
                : <Button btnLogin onClick={logIn}>
                    <LoginImg src={loginImage} alt="login"/>
                    <LoginText>Log in</LoginText>
                </Button>}
        </NavBarStyled>)
}
