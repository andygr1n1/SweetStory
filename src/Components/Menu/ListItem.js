import React, {useContext} from "react";
import styled from 'styled-components';
import {USD_CURRENCY} from "../Functions/secondaryFunction";
import {Context} from "../Functions/context";

const List = styled.ul`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Item = styled.li`
    position: relative;
    width: 30%;
    background-image: url(${({bgImg}) => bgImg});
    background-size: cover;
    background-position: center;
    margin: 30px 30px 0 0;    
    color: snow;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);   
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 30%;
        z-index: -1;
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 0.2);
        &:after {
            opacity: 0;
        }
    }
`

const Img = styled.img`
  border-radius: 10px 10px 0 0;
  margin: 0 0 15px 0;  
`

const P = styled.p`
  padding: 0 0 10px 15px;
  font-size: 30px;
  font-family: 'Stint Ultra Condensed', cursive;
`

export const ListItem = ({itemList, bgImg, stateChoices, stateTopping}) => {
    const {openItem: {setOpenItem}} = useContext(Context);
    console.log(itemList)

    return (
        <List>
            {itemList.map((item) => (
                <Item
                    key={'_' + Math.random().toString(36).substr(2, 9)}
                    img={item.img}
                    bgImg={bgImg}
                    onClick={() => {
                        setOpenItem(item);
                        stateChoices.setChoice("")
                        stateTopping.setTopping("")
                    }}
                >
                    <Img src={item.img}/>
                    <P>{item.name}</P>
                    <P>{USD_CURRENCY(item.price)}</P>
                </Item>
            ))}
        </List>
    )
}