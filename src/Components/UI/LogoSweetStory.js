import React from 'react'
import styled, {css} from "styled-components";
import logoImg from "../../image/logo.png";
import {device} from "./MediaQueries/MediaQueries";

export const Logo = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 30px;
    
    @media ${device.mobileL} {        
      padding: 20px 5px;                           
    }
    
    ${props => props.f && css`
        @media ${device.tablet} {        
           display: none;                           
        }
    `}
`

export const ImgLogo = styled.img`
    height: 50px;
    
    @media ${device.tablet} {        
    display: none;            
    }
`

export const LogoText = styled.div`
    display: inline-block;
    &:after {
        content: "SweetStory";
        font-size: 30px;
        margin-left: 15px;
        font-family: 'Calligraffitti', cursive;
        font-weight: bolder;
        color: #e00707;
        text-shadow: 2px 2px 1px rgb(40,39,39);
        
    @media ${device.tablet} {        
        font-size: 20px;           
    }
    }  
`

export const LogoSweetStory = () =>  (
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <LogoText />
        </Logo>
    );