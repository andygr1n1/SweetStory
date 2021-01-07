import styled, {css} from "styled-components";

export const H2 = styled.h2`
    text-align: center;
    font-family: 'Anton', sans-serif;
    color: #222121;

${props => props.newYearOffer && css`    
    color: #1b8f18;
    text-shadow: 2px 2px 1px rgb(40,39,39);   
`}

${props => props.orderTitle && css`
    margin-bottom: 30px;
`}

${props => props.modalHeader && css`
    font-family: 'Stint Ultra Condensed',cursive;
    font-size: 30px;
    color: snow;
    margin: 10px;
    font-weight: normal;
`}







`