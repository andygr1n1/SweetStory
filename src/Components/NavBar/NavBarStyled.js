import styled from "styled-components";

export const NavBarStyled = styled.header`
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

export const Logo = styled.div`
    display: flex;
    align-items: center
`

export const ImgLogo = styled.img`
    height: 50px;
`

export const LoginImg = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`

export const LoginText = styled.div`
  font-weight: bold;
  margin: 0 5px;
  font-family: 'Roboto Condensed',sans-serif;
  font-size: 14px;
  color: #f8f6f4;
  padding: 5px;
`
export const LogInDataUi = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #e0e0e0;
    position: relative;
`

export const UserPanel = styled.div`
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

export const UserOrder = styled.div`
    color: darkred;
    cursor: pointer;
`

export const LogOutText = styled.div`
  cursor: pointer;
  margin-top: 50px;
`