import React from 'react';
import {useCount} from "../Hooks/useCount";
import styled from 'styled-components'
import {Button} from "../UI/Button";
import {H2} from "../UI/H2";
import bgImgStandart from "../../image/li-background2.jpg"
import {CountItem} from "./CountItem";
import {USD_CURRENCY, TOTAL_PRICE_ITEMS} from "../Functions/secondaryFunction";

const Overlay = styled.div`
      font-family: 'Anton', sans-serif;
      position: fixed;
      display:flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;    
    background-image: url(${({bgImg}) => bgImg});
    background-size: cover;
    background-position: center;
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);   
`

const Banner = styled.div`
    border-radius: 10px 10px 0 0 ;
    width: 100%;
    height: 200px;
    background-image: url( ${ ({img}) => img });
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`

const ModalHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 20px ;
`

const ModalContent = styled.div`
    flex: 1 1 auto;
`


export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    const counter = useCount();

    const closeModal = (e) => {
        if (e.target.id === "overlay") {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count
    };


    const addToOrder = () => {
        let duplicate = false;
        orders.forEach(orderCollectionItem => {
            if(orderCollectionItem.name === order.name) {
                console.log('This item is duplicate', order)
                duplicate = true;
                orderCollectionItem.count += order.count;
                setOrders([...orders])
            }
        });
        if(!duplicate) {
            setOrders([...orders, order]);
        }
        setOpenItem(null);
        duplicate = false;
    }

    const {img, name, price} = openItem;
    return (
        <Overlay id={'overlay'} onClick={closeModal}>
            <Modal bgImg={bgImgStandart}>
                <Banner img={img}/>
                <ModalHeader>
                    <H2 modalHeader>{name}</H2>
                    <H2 modalHeader>{USD_CURRENCY(price)}</H2>
                </ModalHeader>
                <ModalContent>
                    <CountItem counter={counter} totalPriceItems={TOTAL_PRICE_ITEMS(order)}/>
                </ModalContent>
                <Button btnModal onClick={addToOrder}>
                    Add
                </Button>
            </Modal>
        </Overlay>
    )
}