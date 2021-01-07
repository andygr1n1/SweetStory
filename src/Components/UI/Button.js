import styled, {css} from "styled-components";
import removeItem from '../../image/close-icon.png'
import shopImg from '../../image/shop-logo-big.png'

export const Button = styled.button`
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
    outline: none;
    border: none; 
    border-radius: 2px;       
    
  ${props => props.btnLogin && css`
    display: flex;
    justify-content: center;
    align-items: center; 
    color: #f0f0f0;
    text-transform: uppercase;
    margin-right: 10px;
    background: none;  
  `}
  
    ${props => props.btnLogout && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    color: #f0f0f0;
    text-transform: uppercase;
    margin-right: 10px;
    background: none;   
    height: 50px;
  `}
  
    ${props => props.btnModal && css`
    font-family: 'Anton', sans-serif;
    background: #dcf5dc;    
    width: 250px;
    height: 65px;
    font-size: 20px;
    color: #2cb371;
    border: 1px solid #2cb371;
    margin: 0 auto 40px;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background: linear-gradient(90deg, #2cb371 0%, #00b01d 37%, #0d8300 100%);           
        color: snow;
    }
    &:disabled {
        background: linear-gradient(90deg, #acacac 0%, #fff7f9 50%, #b7b7b7 100%);       
        color: #c8c8c8;
        border: 1px solid #c8c8c8;
        cursor: default;
           
    }  
  `}

    ${(props) => props.btnRemoveItem  && css`
       font-family: 'Anton', sans-serif;
       width: 15px;
       height: 15px;
       margin-left: 5px;
       background-color: transparent;
       background-image: url(${removeItem});
       background-position: center;
       background-size: cover;
       background-repeat: no-repeat;
  `}  
      
  ${props => props.ButtonCount && css`       
       color: snow;
       height: 30px;
       width: 20px;
       background: transparent;
       border: none;
`}
  
  ${props => props.ModalItemClose && css`
       position: absolute;
       right: -50px;
       width: 30px;
       height: 30px;
       background-color: transparent;
       background-image: url(${removeItem});
       background-position: center;
       background-size: cover;
       background-repeat: no-repeat;      
`}
  
      ${(props) => props.openOrder  && css`       
       width: 30px;       
       height: 30px;       
       background-color: transparent;
       background-image: url(${shopImg});
       background-position: center;
       background-size: cover;
       background-repeat: no-repeat;
  `}
`;