import React from 'react';
import styled from 'styled-components';
import {Button} from "../UI/Button";
import {OrderListItem} from "./OrderListItem";
import {H2} from "../UI/H2";

const OrderStyled = styled.section`
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

const OrderContent = styled.div`
     flex: 1 1 auto;

`

const OrderList = styled.ul`
  

`

const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
        & span:first-child {
        flex-grow: 1;
    };
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`

const EmptyList = styled.p`
  text-align: center;
`

export const Order = ({orders, setOrders}) => {

    return (
        <>
            <OrderStyled>
                <H2 orderTitle> Your order </H2>

                <OrderContent>

                        {orders.length
                            ?
                            <OrderList>
                                {orders.map((order, index) => {
                                    return <OrderListItem orders={orders} index={index} setOrders={setOrders} order={order} key={`${Math.random().toString(36).substr(2, 9)}`} />})}
                            </OrderList>
                            :
                            <EmptyList>Order list is empty</EmptyList>

                        }

                </OrderContent>

                <Total>
                    <span>Total</span><span>5</span><TotalPrice>£999</TotalPrice>
                </Total>

                <Button btnModal>To order</Button>
            </OrderStyled>
        </>
)
}