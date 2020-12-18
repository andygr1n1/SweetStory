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
    
    span {
        font-size: inherit;
    }
    
    body {
        margin: 0;
        background-color: #f0f0f0;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 20px;
        color: black;
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
        font-family: "Pacifico", sans-serif;
        margin: 0;
        padding: 0;
    }
    
    p {
        margin: 0;
        padding: 0;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem;
        background: #303135;
        text-align: center;
    }
`