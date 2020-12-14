import React from 'react';
import styled from 'styled-components';
import {Button} from "./UI/Button";
import logoImg from "../image/LogoBurger.png";
import loginImage from "../image/logo-user-img.svg"

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
    padding: 15px;
    background-color: #299B01;
    color: white;
`

const Logo = styled.div`
    display: flex;
    align-items: center
`
const H1 = styled.h1`    
    font-size: 24px;
    margin-left: 15px;
`
const ImgLogo = styled.img`
    height: 50px;
    
`



export const NavBar = () => (
    <NavBarStyled>
          <Logo>
              <ImgLogo src={logoImg} alt="logo"/>
              <H1>tasty</H1>
          </Logo>
          <Button btnLogin>
              <img src={loginImage} alt="login"/>
              <div style={{marginTop:"5px"}}>Login</div>
          </Button>
    </NavBarStyled>
)