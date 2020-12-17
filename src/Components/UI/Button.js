import styled, {css} from "styled-components";
import trashImage from '../../image/trash.svg'

export const Button = styled.button`
    cursor: pointer;
    font-family: inherit;
    outline: none;
    border: none;    
    
  ${props => props.btnLogin && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    color: #f0f0f0;
    text-transform: uppercase;
    background: none;
  `}
  
    ${props => props.btnModal && css`
    background-color: #299B01;
    border: 1px solid #299B01;
    width: 250px;
    height: 65px;
    font-size: 20px;
    color: snow;
    margin: 0 auto 40px;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: azure;
        border-color: #299B01;
        color: #299B01;
    }  
  `}

    ${props => props.btnTrash && css`
       width: 24px;
       height: 24px;
       background-color: transparent;
       background-image: url(${trashImage});
       background-position: center;
       background-size: cover;
       background-repeat: no-repeat;
  `}  
`