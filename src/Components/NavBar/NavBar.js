import React from 'react';
import styled from 'styled-components';
import {Button} from "../UI/Button";
import logoImg from "../../image/logo.png";
// import loginImage from "../image/logo-user-img.svg"
import loginImage from "../../image/signUp.svg"

const NavBarStyled = styled.header`
    position: fixed;
    height: 80px;
    width: 100vw;
    z-index: 999;    
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: linear-gradient(90deg, #2cb371 0%, #00b01d 37%, #0d8300 100%);

    color: white;
`

const Logo = styled.div`
    display: flex;
    align-items: center
`
const H1 = styled.h1`    
    font-size: 30px;
    margin-left: 15px;
    font-family: 'Calligraffitti', cursive;
    color: #e00707;
    text-shadow: 2px 2px 1px rgb(40,39,39);
`
const ImgLogo = styled.img`
    height: 50px;
    
`

const LoginImg = styled.img`
  width: 35px;
  height: 35px;
`

const LoginText = styled.div`
  text-shadow: 2px 2px 1px rgb(40,39,39);
  font-family: 'Stint Ultra Condensed',cursive;
  font-size: 20px;
  margin: 0 5px;
  color: #e0e0e0;
`
const LogInDataUi = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
     color: #e0e0e0;
`

export const NavBar = ({authentication, logIn, logOut}) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>SweetStory</H1>
        </Logo>
        {authentication
            ? <Button btnLogout>
                    <LogInDataUi>
                        <LoginImg src={authentication.photoURL} alt={authentication.displayName}/><LoginText>{authentication.displayName}</LoginText>
                    </LogInDataUi>
                <LoginText onClick={logOut}>Log out</LoginText>
            </Button>
            : <Button btnLogin onClick={logIn}>
                <LoginImg src={loginImage} alt="login"/>
                <LoginText>Log in</LoginText>
            </Button>}
    </NavBarStyled>
)