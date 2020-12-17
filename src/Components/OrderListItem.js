import React from 'react';
import styled from 'styled-components';

import {Button} from "./UI/Button";

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`

const ItemName = styled.span`
    flex: 1 1 auto;
`

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`


export const OrderListItem = () => {

    return(
        <OrderItemStyled>
            <ItemName>Burder</ItemName>
            <span>2</span>
            <ItemPrice>£300</ItemPrice>
            <Button btnTrash/>
        </OrderItemStyled>

    )
}