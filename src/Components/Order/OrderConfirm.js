import React, {useContext, useRef} from 'react';
import {Overlay} from "../UI/Overlay";
import {H2} from "../UI/H2";
import {H3} from "../UI/H3";
import {Button} from "../UI/Button";
import {ModalOrderConfirm, ConfirmWrap, ConfirmInfo} from "./OrderStyled";
import {projection, TotalCalc, USD_CURRENCY} from "../Functions/secondaryFunction";
import {Context} from "../Functions/context";
import {useThanksForOrder} from "../Hooks/useThanksForOrder";

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', item => item ? item : (Number(0))],
    choice: ['choice', item => item ? item : (Number(0))],
    fComponents: [
        'fComponents', arr => arr.filter(x => x.checked).map(x => x.name),
        arr => arr.length ? arr : (Number(0))
    ]
}

export const OrderConfirm = () => {

    const {
        auth: {authentication},
        orders: {orders, setOrders},
        orderConfirm: {setOpenOrderConfirm},
        database,
    } = useContext(Context);
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
        }, 4000)
    }


    return (
        <Overlay ref={OverlayRef} onClick={(event) => {
            CloseOnOverlay(event)
        }}>
            <ModalOrderConfirm>
                <Button  orderConfirmBtnClose onClick={() => {
                    setOpenOrderConfirm(false)
                }}/>
                <H2>{authentication.displayName}</H2>
                {thanks.thanksForOrder
                    ?
                    <ConfirmWrap>
                        <H3 thanks>Thanks For Order!</H3>
                        <h3>Verify your email for details</h3>
                    </ConfirmWrap>
                    :
                    <ConfirmWrap>
                        <h3>Let's verify your order</h3>
                        <ConfirmInfo>
                            <h3>Total</h3>
                            <h4>{USD_CURRENCY(TotalCalc(orders).priceAllOrders)}</h4>
                        </ConfirmInfo>
                        <Button btnModal onClick={() => {
                            sendOrder()
                        }}>Buy</Button>
                    </ConfirmWrap>
                }
            </ModalOrderConfirm>
        </Overlay>
    )
}