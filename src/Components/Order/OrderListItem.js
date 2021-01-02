import React, {useContext, useRef} from 'react';
import styled from 'styled-components';
import {TOTAL_PRICE_ITEMS, USD_CURRENCY} from "../Functions/secondaryFunction";
import {Button} from "../UI/Button";
import {Context} from "../Functions/context";


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

const FoodComponentsDescription = styled.div`
   font-family: 'Calligraffitti', cursive;
   font-size: 14px;
`

const editWindow = (setOpenItem, order, index, setChoice, setTopping) => {
    setOpenItem({...order, index});
    setChoice(order.choice ? order.choice : "");
    setTopping(order.topping ? order.topping : "")
}


export const OrderListItem = ({order, setOrders, index, orders}) => {
    const {openItem: {setOpenItem}} = useContext(Context)
    const {stateChoices: {setChoice}} = useContext(Context)
    const {stateTopping: {setTopping}} = useContext(Context)

    const $foodComponents = order.fComponents.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    const btnRemoveItem = useRef(null);

    return (
        <OrderItemStyled onClick={(e) => e.target === btnRemoveItem.current
            ?  setOrders([...orders].filter((order, i) => i !== index))
            : editWindow(setOpenItem, order, index, setChoice, setTopping)
            }
        >
            <ItemName>
                <div>{order.choice ? order.choice : order.name}</div>
                <FoodComponentsDescription>{order.fComponents && $foodComponents}</FoodComponentsDescription>
                <ToppingDescription>{order.topping}</ToppingDescription>
            </ItemName>
            <Costs>
                <div>{order.count}</div>
                <ItemPrice>
                    {USD_CURRENCY(TOTAL_PRICE_ITEMS(order))}
                    <Button btnRemoveItem ref={btnRemoveItem} />
                </ItemPrice>

            </Costs>
        </OrderItemStyled>

    )
}