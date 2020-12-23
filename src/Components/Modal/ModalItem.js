import React from 'react';
import styled from 'styled-components'
import {useCount} from "../Hooks/useCount";
import {Ingredients} from "./Ingredients";

import {useToppings} from "../Hooks/useToppings";
import {Toppings} from "./Toppings";

import {useChoices} from "../Hooks/useChoices";
import {Choices} from "./Choices";

import {Button} from "../UI/Button";
import {H2} from "../UI/H2";
import bgImgStandart from "../../image/li-background2.jpg"
import {CountItem} from "./CountItem";
import {CkeckedToppings, TOTAL_PRICE_ITEMS} from "../Functions/secondaryFunction";


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
      background-color: rgba(0, 0, 0, .9);
      z-index: 20000;
`;

const Modal = styled.div`
      position: inherit;
      background-color: #fff;    
      background-image: url(${({bgImg}) => bgImg});
      background-size: cover;
      background-position: center;
      width: 400px;
      height: 75%;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);   
      z-index: 15000;
`

const Banner = styled.div`
    border-radius: 10px 10px 0 0 ;
    width: 100%;
    height: 300px;
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
    flex-direction: column;
    padding: 25px;
`


export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    const stateCounter = useCount();
    const stateToppings = useToppings(openItem);
    const stateChoices = useChoices();

    const order = {
        ...openItem,
        count: stateCounter.count,
        topping: stateToppings.toppings,
        choice: stateChoices.choice,
    };


    const addToOrder = () => {
        let duplicate = false;
        orders.forEach(orderCollectionItem => {
            if (orderCollectionItem.name === order.name && CkeckedToppings(orderCollectionItem.topping) === CkeckedToppings(order.topping) && orderCollectionItem.choice === order.choice ) {
                console.log('This item is duplicate', order)
                duplicate = true;
                orderCollectionItem.count += order.count;
                setOrders([...orders])
                order.topping.filter(item => console.log(item))
            }
        });
        if (!duplicate) {
            setOrders([...orders, order]);
        }
        setOpenItem(null);
        duplicate = false;

    }

    const closeModal = (e) => {
        if (e.target.id === "overlay" || e.target.id === "ModalItemClose") {
            setOpenItem(null);
        }
    }

    const {img, name, ingredients, toppings, choices} = openItem;

    return (
        <Overlay id={'overlay'} onClick={closeModal}>
            <Modal bgImg={bgImgStandart}>
                <Button ModalItemClose id={'ModalItemClose'} onClick={closeModal}/>
                <Banner img={img}/>
                <ModalHeader>
                    <H2 modalHeader>{name}</H2>
                    {ingredients && <Ingredients ingredients={ingredients}/>}
                    {toppings && <Toppings {...stateToppings} />}
                    {choices && <Choices {...stateChoices} openItem={openItem}/>}
                </ModalHeader>
                <ModalContent>
                    <CountItem counter={stateCounter} totalPriceItems={TOTAL_PRICE_ITEMS(order)}/>
                </ModalContent>
                <Button btnModal onClick={addToOrder} disabled={order.choices && !order.choice}>
                    Add
                </Button>
            </Modal>
        </Overlay>
    )
}