import styled, {css} from "styled-components";
import {device} from "./MediaQueries/MediaQueries";

export const H2 = styled.h2`
    text-align: center;
    font-family: 'Anton', sans-serif;
    color: #222121;

${props => props.newYearOffer && css`      
    font-size: calc(30px + (30 - 25) * ((100vw - 320px) / (1200 - 320)));
    line-height: calc(40px + (41 - 20) * ((100vw - 320px) / (1200 - 320)));
    color: #1b8f18;
    text-shadow: 2px 2px 1px rgb(40,39,39);  
    
    @media ${device.mobileL} {
     font-size: calc(20px + (20 - 25) * ((100vw - 320px) / (1200 - 320)));
    } 
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