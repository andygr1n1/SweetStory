import styled, {css} from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    font-family: inherit;
    
  ${props => props.btnLogin && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    outline: none;
    border: none;
    color: #f0f0f0;
    text-transform: uppercase;
  `}
  
`