import React from 'react';
import styled from 'styled-components';

const IngredientList = styled.div`
    font-family: 'Stint Ultra Condensed',cursive;
    font-size: 20px;    
    font-style: italic;
    color: snow;
`

export function Ingredients({ingredients}) {
    return (
        <IngredientList>{ingredients.join(", ")}</IngredientList>
    )
}