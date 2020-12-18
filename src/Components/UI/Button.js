import styled, {css} from "styled-components";
import removeItem from '../../image/close-icon.png'

export const Button = styled.button`
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
    outline: none;
    border: none; 
    border-radius: 2px;       
    
  ${props => props.btnLogin && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    color: #f0f0f0;
    text-transform: uppercase;
    margin-right: 10px;
    background: none;   
  `}
  
    ${props => props.btnModal && css`
    font-family: 'Anton', sans-serif;
    background: linear-gradient(90deg, #2cb371 0%, #00b01d 37%, #0d8300 100%);    
    width: 250px;
    height: 65px;
    font-size: 20px;
    color: snow;
    margin: 0 auto 40px;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background: rgb(156,13,15);        
        color: snow;
    }  
  `}

    ${props => props.btnRemoveItem && css`
       font-family: 'Anton', sans-serif;
       width: 15px;
       height: 15px;
       background-color: transparent;
       background-image: url(${removeItem});
       background-position: center;
       background-size: cover;
       background-repeat: no-repeat;
  `}  
`