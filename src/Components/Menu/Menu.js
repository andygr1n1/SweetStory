import React from "react";
import styled from 'styled-components';
import DBSweet from "./DBSweet";
import {ListItem} from "./ListItem";
import {Banner} from "./Banner";

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

const H2 = styled.h2`
  text-align: center;
  font-family: 'Anton', sans-serif;
  color: #1b8f18;
  text-shadow: 2px 2px 1px rgb(40,39,39);
`

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <H2>New Year Offer</H2>
            <ListItem
                itemList={DBSweet.newYear}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
        <SectionMenu>
            <h2>Snacks / Drinks</h2>
            <ListItem
                itemList={DBSweet.newYear}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
)

