import React from 'react';
import styled from 'styled-components';

import {Button} from "../UI/Button";

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    align-items: center;
    justify-content: space-between;
    font-size: 18px
`

const ItemName = styled.span`
    padding-right: 10px;    
    
`

const Count = styled.span`  
`

const ItemPrice = styled.span`  
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
    flex: 1 1 auto;
`

const Costs = styled.div`
   
   display: flex;
   flex-wrap: nowrap;
   align-items: center;
    
`


export const OrderListItem = ({order, setOrders, index, orders}) => {
    const z = index;

    return(
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <Costs>
                <Count>${index}</Count>
                <ItemPrice>
                    {order.price.toLocaleString(
                        'en-GB',
                        {style: 'currency', currency: 'USD'}
                    )}
                </ItemPrice>
                <Button btnRemoveItem onClick={() => {
                    setOrders(orders.filter((order, index) => index !== z));
                }}/>
            </Costs>
        </OrderItemStyled>

    )
}