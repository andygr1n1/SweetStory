import React, {useContext, useRef} from 'react';
import styled from "styled-components";
import {Button} from "../Button";
import {Context} from "../../Functions/context";
import {device} from "../MediaQueries/MediaQueries";

const UserInfo = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;        
        position: relative; 
    `
const UserImg = styled.img`
        width: 25px;
        height: 25px;
        margin: 0 10px; 
      @media ${device.mobileL} {       
        display: none;
    }      
    `
const UserName = styled.div`
        font-weight: bold;    
        font-family: 'Roboto Condensed',sans-serif;
        font-size: 14px;        
    `
const UserPanel = styled.div`
        display: none;
        width: 120px;        
        height: 100px;
        padding: 10px;
        position: absolute;  
        top: 95px;
        right: 35px;
        background: snow;            
        border: 1px solid snow;
        border-radius: 10px;
        box-shadow: 3px 4px 6px rgba(0,0,0,0.25);
        font-size: 13px;
        color: #1b8f18; 
        font-weight: bold;       
        text-align: left;
        cursor: default;
        
    @media ${device.tablet} {       
        top: 75px;        
    } 
        
      @media ${device.mobileL} {       
        top: 75px;
        right: 5px;  
    }  
    `
const UserOrder = styled.div`
        color: darkred;
        cursor: pointer;
    `
const LogOutText = styled.div`
        cursor: pointer;
        margin-top: 50px;
    `

export const UserLoggedIn = () => {

    const {auth: {authentication, logOut}} = useContext(Context);
    const {orderAnimation: {openClose}} = useContext(Context);
    const userPanel = useRef(null);
    const toggleModalUserOptions = (userPanel) => {
        switch (userPanel.style.display) {
            case "block":
                userPanel.style.display = "none";
                break;
            case "none":
                userPanel.style.display = "block";
                break;
            default:
                userPanel.style.display = "block";
                break;
        }
    }

    return (
        <Button btnLogout>
            <UserInfo onClick={() => {
                toggleModalUserOptions(userPanel.current)
            }}>
                <UserImg src={authentication.photoURL} alt={'img'}/>
                <UserName>{authentication.displayName}</UserName>
            </UserInfo>

            <UserPanel ref={userPanel}>
                <UserOrder onClick={() => {
                    toggleModalUserOptions(userPanel.current);
                    openClose("orderWrap");
                }}>My order</UserOrder>
                <LogOutText onClick={logOut}>Log out</LogOutText>
            </UserPanel>
        </Button>
    )
}