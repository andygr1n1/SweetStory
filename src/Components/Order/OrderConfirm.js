import React, {useContext, useRef} from 'react';
import {Overlay} from "../UI/Overlay";
import {H2} from "../UI/H2";
import {Button} from "../UI/Button";
import {Total, TotalPrice} from "../UI/OrderStyled";
import {ModalOrderConfirm, Text} from "../UI/OrderConfirmStyled";
import {projection, TotalCalc, USD_CURRENCY} from "../Functions/secondaryFunction";
import {Context} from "../Functions/context";
import {useThanksForOrder} from "../Hooks/useThanksForOrder";

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', item => item ? item : "Data not set"],
    choice: ['choice', item => item ? item : "Data not set"],
    fComponents: [
        'fComponents', arr => arr.filter(x => x.checked).map(x => x.name),
        arr => arr.length ? arr : "Data not set",
    ],
}

export const OrderConfirm = () => {

    const {auth: {authentication}} = useContext(Context);
    const {orders: {orders, setOrders,}} = useContext(Context);
    const {orderConfirm: {setOpenOrderConfirm}} = useContext(Context);
    const {database} = useContext(Context);
    const thanks = useThanksForOrder();

    const OverlayRef = useRef(null);
    const CloseOnOverlay = (event) => {
        const target = event.target;
        if (target === OverlayRef.current) {
            setOpenOrderConfirm(false)
        }
    }

    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        database.ref('orders').push().set({
            clientName: authentication.displayName,
            email: authentication.email,
            order: newOrder,
        });
        setOrders([]);
        thanks.setThanksForOrder(true)
        setTimeout(() => {
            setOpenOrderConfirm(false);
            thanks.setThanksForOrder(false);
        }, 2000)
    }


    return (
        <Overlay ref={OverlayRef} onClick={(event) => {
            CloseOnOverlay(event)
        }}>
            <ModalOrderConfirm>
                <Button ModalItemClose onClick={() => {
                    setOpenOrderConfirm(false)
                }}/>
                <H2>{authentication.displayName}</H2>
                {thanks.thanksForOrder
                    ?
                    <Text>Thanks For Order</Text>
                    :
                    <>
                        <Text>Let's verify your order</Text>
                        <Total>
                            <span>Total</span><span>{TotalCalc(orders).countAllOrders}</span><TotalPrice>{USD_CURRENCY(TotalCalc(orders).priceAllOrders)}</TotalPrice>
                        </Total>
                        <Button btnModal onClick={() => {
                            sendOrder()
                        }}>Buy</Button>
                    </>
                }
            </ModalOrderConfirm>
        </Overlay>
    )
}