import React from 'react';
import styled from 'styled-components'
import {Button} from "./UI/Button";

const Overlay = styled.div`
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
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;
`

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url( ${ ({img}) => img });
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 50px ;
`

const ModalContent = styled.div`
    flex: 1 1 auto;
`

export const ModalItem = ({openItem, setOpenItem}) => {

    function closeModal(e) {
        if(e.target.id === "overlay") {
            setOpenItem(null);
        }
    }

    if(!openItem) return null;
    const {img, name, price} = openItem;
    return (
        <Overlay id={'overlay'} onClick={closeModal}>
            <Modal>
                <Banner img={img} />
                <ModalHeader>
                    <h2>{name}</h2>
                    <h2>{price.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})}</h2>
                </ModalHeader>
                <ModalContent/>
                <Button btnModal>
                    Add
                </Button>
            </Modal>
        </Overlay>
    )
}