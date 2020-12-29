import React from 'react';
import styled from 'styled-components';
import {Button} from "../UI/Button";
import {OrderListItem} from "./OrderListItem";
import {H2} from "../UI/H2";
import {projection} from "../Functions/secondaryFunction";

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

const TotalCalc = (orders) => {
    let priceArray = [];
    let countArray = [];
    orders.forEach(order => {
        priceArray.push(order.price * Number(order.count));
        countArray.push(Number(order.count))
    })
    return {
        priceAllOrders : priceArray.reduce((result, price) => result + price, 0),
        countAllOrders : countArray.reduce((result, count) => result + count, 0)
    }
}


const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', item => item ? item : "Data not set"],
    choice: ['choice', item => item ? item : "Data not set"],
    fComponents:  [
        'fComponents', arr => arr.filter(x => x.checked).map(x => x.name),
        arr => arr.length ? arr : "Data not set",
    ],

}

export const Order = ({orders, setOrders, setOpenItem, stateCounter, stateChoices, stateTopping, authentication, logIn, firebaseDatabase}) => {
    const dataBase =  firebaseDatabase();
    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        dataBase.ref('orders').push().set({
            clientName: authentication.displayName,
            email: authentication.email,
            order: newOrder,
        });

        setOrders([]);
    }

    const saveOrder = (authentication, orders, logIn) => {
        if (!authentication) {
            logIn();
        } else {
            console.log('sent')
            sendOrder()
        }
    };

    return (
        <>
            <OrderStyled>
                <H2 orderTitle> Your order </H2>

                <OrderContent>

                        {orders.length
                            ?
                            <OrderList>
                                {orders.map((order, index) => {
                                    return <OrderListItem stateTopping={stateTopping} stateChoices={stateChoices} stateCounter={stateCounter} setOpenItem={setOpenItem} orders={orders} index={index} setOrders={setOrders} order={order} key={`${Math.random().toString(36).substr(2, 9)}`} />})}
                            </OrderList>
                            :
                            <EmptyList>Order list is empty</EmptyList>
                        }

                </OrderContent>

                <Total>
                    <span>Total</span><span>{TotalCalc(orders).countAllOrders}</span><TotalPrice>{TotalCalc(orders).priceAllOrders.toLocaleString('en-GB', {style: 'currency', currency: 'USD'})}</TotalPrice>
                </Total>

                <Button btnModal onClick={() => {saveOrder(authentication, orders, logIn)}}>To order</Button>
            </OrderStyled>
        </>
)
}