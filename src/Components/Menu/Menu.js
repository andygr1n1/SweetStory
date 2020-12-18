import React from "react";
import styled from 'styled-components';
import DBSweet from "./DBSweet";
import {ListItem} from "./ListItem";
import {Banner} from "./Banner";
import {H2} from "../UI/H2";

const MenuStyled = styled.main`
    background: snow;
    margin: 80px 0 0 380px;
    //height: 500px;
`

const SectionMenu = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`



export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <H2 newYearOffer>New Year Offer</H2>
            <ListItem
                itemList={DBSweet.newYear}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
        <SectionMenu>
            <H2 menuHeader>Desserts</H2>
            <ListItem
                itemList={DBSweet.desserts}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
)

