import React, {useContext} from "react";
import styled, {css} from 'styled-components';
import {USD_CURRENCY} from "../Functions/secondaryFunction";
import {Context} from "../Functions/context";
import {device} from "../UI/MediaQueries/MediaQueries";

const List = styled.ul`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    padding-left: 30px;
    
`

const Item = styled.li`
    display: flex;
    flex-direction: column;    
    min-height: 400px;    
    position: relative;
    width: 25%;
    background-image: url(${({bgImg}) => bgImg});
    background-size: cover;
    background-position: center;
    margin: 30px 30px 0 0;    
    color: snow;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);  
    
    @media ${device.laptop} {
     min-height: 331px;     
    }
     
    
    @media ${device.tablet} {
     min-height: 362px;     
     width: 40%;
    }
    
        
    @media ${device.mobileL} {       
     width: 100%;
    }
    
    
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

const MenuItemContent = styled.div`
    font-family: 'Stint Ultra Condensed', cursive;
    font-size: 25px;
    padding: 0 10px 30px 15px;
    
  ${props => props.itemHeader && css`    
    flex: 1 1 auto;    
  `}
  
  ${props => props.itemPrice && css`
    color: #08ad22;   
  `}
 `

export const ListItem = ({itemList, bgImg}) => {
    const {
        openItem: {setOpenItem},
        stateChoices: {setChoice},
        stateTopping: {setTopping},
    } = useContext(Context);

    return (
        <List>
            {itemList.map((item) => (
                <Item
                    key={'_' + Math.random().toString(36).substr(2, 9)}
                    img={item.img}
                    bgImg={bgImg}
                    onClick={() => {
                        setOpenItem(item);
                        setChoice("")
                        setTopping("")
                    }}
                >
                    <Img src={item.img}/>
                    <MenuItemContent itemHeader>{item.name}</MenuItemContent>
                    <MenuItemContent itemPrice>{USD_CURRENCY(item.price)}</MenuItemContent>
                </Item>
            ))}
        </List>
    )
}