import React, {useContext} from 'react';
import {Context} from "../Functions/context";

import {H2} from "../UI/H2";
import {Button} from "../UI/Button";
import {OrderListItem} from "./OrderListItem";
import {
    EmptyList,
    OrderContent,
    OrderStyled,
    OrderToggleBtn,
    OrderToggleSymbol,
    OrderWrap,
    Total,
    TotalPrice
} from "./OrderStyled";
import {TotalCalc, USD_CURRENCY} from "../Functions/secondaryFunction";

export const Order = () => {
    const {auth: {authentication, logIn}} = useContext(Context);
    const {orders: {orders, setOrders,}} = useContext(Context);
    const {orderConfirm: {setOpenOrderConfirm}} = useContext(Context);
    const {orderAnimation: {openClose, direction}} = useContext(Context);
    const saveOrder = () => {
        if (!authentication) {
            logIn();
        } else {
            setOpenOrderConfirm(true)
        }
    };

    return (
        <OrderWrap id='orderWrap'>
            <OrderStyled>
                <H2 orderTitle> Your order </H2>
                <OrderContent>
                    {orders.length
                        ?
                        <ul>
                            {orders.map((order, index) => {
                                return <OrderListItem
                                    orders={orders}
                                    index={index}
                                                      setOrders={setOrders}
                                                      order={order}
                                                      key={`${Math.random().toString(36).substr(2, 9)}`}/>
                            })}
                        </ul>
                        :
                        <EmptyList>Order list is empty</EmptyList>
                    }
                </OrderContent>
                {
                    orders.length
                        ?
                        <>
                            <Total>
                                <span>Total:</span><span>{TotalCalc(orders).countAllOrders}</span>
                                <TotalPrice>{USD_CURRENCY(TotalCalc(orders).priceAllOrders)}</TotalPrice>
                            </Total>
                            <Button btnModal onClick={() => {
                                saveOrder()
                            }}>To order</Button>
                        </>
                        : null
                }
            </OrderStyled>
            <OrderToggleBtn onClick={() => {openClose("orderWrap")}}> <OrderToggleSymbol>{direction}</OrderToggleSymbol> </OrderToggleBtn>
        </OrderWrap>
)
}