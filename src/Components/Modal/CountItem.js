import React from 'react';
import styled from 'styled-components';
import {Button} from "../UI/Button";
import {USD_CURRENCY} from "../Functions/secondaryFunction";


const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;    
    color: snow;

`;

const CountInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;    
    outline: none;
    color: snow;
    text-align: center;
    height: 30px;
    margin: 0 5px;
    background: linear-gradient(90deg, #2cb371 0%, #00b01d 37%, #0d8300 100%); 
    border: none;
`;

const TotalPrice = styled.span`
    width: 25%;
    color: #00b01d;
    margin-right: 20px;
`

export function CountItem({counter, totalPriceItems}) {
    let {count, setCount, onChange} = counter;



    return (
        <CountWrapper>
            <span>Count:</span>
            <CountInputWrapper>
                <Button ButtonCount disabled={count <=1} onClick={() => setCount(count - 1)}>-</Button>
                <CountInput value={count < 1 ? 1 : count} type='number' min='1' max='100' onChange={onChange} />
                <Button ButtonCount onClick={() => setCount(+count + Number(1))}>+</Button>
            </CountInputWrapper>
            <TotalPrice>{USD_CURRENCY(totalPriceItems)}</TotalPrice>
        </CountWrapper>
    )
}
