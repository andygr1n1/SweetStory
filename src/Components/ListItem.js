import React from "react";
import styled from 'styled-components';

const List = styled.ul`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    background-image: ${({img}) => `url(${img})`};
    background-position: center;
    background-size: cover;
    margin: 30px 30px 0 0;
    font-size: 30px;
    padding: 15px;
    color: white;
    z-index: 1;
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

export const ListItem = ({ itemList, setOpenItem }) => (
    <List>
        {itemList.map((item) => (
            <Item
                key={item.id}
                img={item.img}
                onClick={ () => setOpenItem(item) }
            >
                <p>{item.name}</p>
                <p>{item.price.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})}</p>
            </Item>
        ))}
    </List>
)