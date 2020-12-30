import React from 'react';
import styled from 'styled-components';
import {Button} from "../UI/Button";
import logoImg from "../../image/logo.png";
import loginImage from "../../image/signUp.svg"

const NavBarStyled = styled.header`
    position: fixed;
    height: 90px;
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
  margin: 5px;
`

const LoginText = styled.div`
  //text-shadow: 2px 2px 1px rgb(40,39,39);
  //font-family: 'Stint Ultra Condensed',cursive;
  //font-size: 20px;
  font-weight: bold;
  margin: 0 5px;
  //color: #e0e0e0;
  font-family: 'Roboto Condensed',sans-serif;
  font-size: 14px;
  color: #f8f6f4;
  padding: 5px;
`
const LogInDataUi = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #e0e0e0;
    position: relative;
`

const UserPanel = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;    
    display: none;
    background: snow;    
    top: 95px;
    right: 45px;
    border: 1px solid snow;
    border-radius: 10px;
    box-shadow: 3px 4px 6px rgba(0,0,0,0.25);
    font-size: 13px;
    color: #1b8f18; 
    font-weight: bold;
    padding: 10px;
    text-align: left;
    cursor: default;
`

const LogOutText = styled.span`
  cursor: pointer;
`

function toggleModalUserOptions(event) {
    const target = event.target;
    console.log(target)
    console.log('click')
    const modal = document.getElementById('user__panel');
    modal.classList.toggle('toggle__show');
}

export const NavBar = ({authentication, logIn, logOut}) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>SweetStory</H1>
        </Logo>
        {authentication
            ? <Button btnLogout>
                    <LogInDataUi onClick={toggleModalUserOptions}>
                        <LoginImg src={authentication.photoURL} alt={authentication.displayName}/><LoginText>{authentication.displayName}</LoginText>
                    </LogInDataUi>
                <UserPanel id={'user__panel'}>
                    <LogOutText onClick={logOut}>Log out</LogOutText>
                </UserPanel>
            </Button>
            : <Button btnLogin onClick={logIn}>
                <LoginImg src={loginImage} alt="login"/>
                <LoginText>Log in</LoginText>
            </Button>}
    </NavBarStyled>
)