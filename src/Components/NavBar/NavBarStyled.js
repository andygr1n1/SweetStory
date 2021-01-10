import styled from "styled-components";
import {device} from "../UI/MediaQueries/MediaQueries";

export const NavBarStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;        
    z-index: 2;    
    top: 0;
    left: 0;
    background: linear-gradient(90deg, #2cb371 0%, #00b01d 37%, #0d8300 100%);
    color: snow;    
    @media ${device.tablet} {        
                             
    }
`

export const NavBarControlPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;    
    padding: 20px 30px;     
    
    @media ${device.mobileL} {       
      padding: 20px 5px;  
    }  
`

export const LoginText = styled.div`
  font-weight: bold;
  font-family: 'Roboto Condensed',sans-serif;
  font-size: 14px;
  color: #f8f6f4;

`

