import styled from "styled-components";

export const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    background: snow;
    max-width: 380px;
    width: 100%;
    height: calc(100% - 80px);
    z-index: 100;
    box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.25);
    padding: 20px;
    display: flex;
    flex-direction: column;   
`;

export const OrderContent = styled.div`
     flex: 1 1 auto;

`
export const EmptyList = styled.p`
  text-align: center;
`


export const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
        & span:first-child {
        flex-grow: 1;
    };
`;

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`