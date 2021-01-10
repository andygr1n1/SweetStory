import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;          
    }
    
    *,
    *::before,
    *::after {
    box-sizing: inherit;  
    }
    
    @media (prefers-reduced-motion: reduce) {
    * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    }
    }
    
    span {
        font: inherit;
    }
    
    body {
        margin: 0;
        background-color: #f0f0f0;        
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 20px;   
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1;     
    }
    
    img {
        max-width: 100%;
        height: auto;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    h1, h2, h3 {        
        font-family: 'Anton',sans-serif;
        margin: 0;
        padding: 0;
    }
    
    p {
        margin: 0;
        padding: 0;
    }
    
    input, button {
    font: inherit;
    }
    
    input[type='number']{
        -moz-appearance: textfield;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem;
        background: #303135;
        text-align: center;
    }    
`