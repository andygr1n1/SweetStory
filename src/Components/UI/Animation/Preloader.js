import React from 'react';
import styled, {keyframes} from 'styled-components';

/***********************************/

const ContainerLoader = styled.div`
    margin: 0 auto;
`

const rotate = keyframes`
        from {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg); }
        to {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
`

const Loader = styled.div`
        display: inline-block;
        border: 2px dotted black;
        border-radius: 100%;
        -webkit-animation: ${rotate} 800ms linear infinite;
        animation: ${rotate} 6s linear infinite;
        width: 50px;
        height: 50px;
        vertical-align: middle;
        background-image: linear-gradient(to right top, #009688, #2aa5ec, #19b7c5, #00bf72, #09f9ee);
        &:after, &:after {
            content: '';
            width: .8em;
            height: .8em;
            display: block;
            position: absolute;
            top: calc(50% - .4em);left: calc(50% - .4em);
            border-left: 0.08em solid #fcfffb;
            border-radius: 100%;animation: loader-37 0.5s linear infinite reverse;        
        }        
`

export const Preloader = () => (
    <ContainerLoader>
        <Loader/>
    </ContainerLoader>
)