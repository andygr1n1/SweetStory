import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 15px 0;
    font-family: 'Stint Ultra Condensed',cursive;    
    color: snow;
`
const ToppingLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-wrap: wrap;
    max-width: 300px;
    font: inherit;
    color: inherit;
`
const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 10px;    
`

export function Toppings({toppings, checkToppings}) {
    return (
      <ToppingWrap>
          {toppings.map((topping, i) =>(
              <ToppingLabel key={i}>
                  <ToppingCheckbox name="radioButton"  type="radio" checked={topping.checked} onChange={() => checkToppings(i)} />{topping.name}
              </ToppingLabel>
          ))}
      </ToppingWrap>
    )
}