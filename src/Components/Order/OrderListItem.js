import React from 'react';
import styled from 'styled-components';
import {USD_CURRENCY, TOTAL_PRICE_ITEMS, CkeckedToppings} from "../Functions/secondaryFunction";
import {Button} from "../UI/Button";


const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    cursor: pointer;
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
    min-width: 100px;
    text-align: right;    
    align-items: center;
`

const Costs = styled.div`
   
   display: flex;
   flex-wrap: nowrap;
   
    
`

const ToppingDescription = styled.div`
   font-family: 'Calligraffitti', cursive;
   font-size: 16px;
`

const editWindow = (stateCounter, setOpenItem, order, index, stateChoices) => {
    stateCounter.setCount(order.count)
    setOpenItem({...order, index});
    stateChoices.setChoice(order.choice ? order.choice : "");
}


export const OrderListItem = ({order, setOrders, index, orders, setOpenItem, stateCounter, stateChoices}) => {

    return(
        <OrderItemStyled onClick={(e) => {
            if (e.target.id !== "remove_me") {
                editWindow(stateCounter, setOpenItem, order, index, stateChoices);
            }

        }}>
            <ItemName><div>{order.choice ? order.choice :  order.name}</div><ToppingDescription>{CkeckedToppings(order.topping)}</ToppingDescription></ItemName>
            <Costs>
                <Count>{order.count}</Count>
                <ItemPrice>
                    {USD_CURRENCY(TOTAL_PRICE_ITEMS(order))}
                    <Button id="remove_me" btnRemoveItem onClick={() => {
                        setOrders(orders.filter((order, i) => i !== index));
                    }}/>
                </ItemPrice>

            </Costs>
        </OrderItemStyled>

    )
}