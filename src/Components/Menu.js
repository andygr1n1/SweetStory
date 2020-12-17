import React from "react";
import styled from 'styled-components';
import dbMenu from "./DBMenu";
import {ListItem} from "./ListItem";
import {Banner} from "./Banner";

const MenuStyled = styled.main`
    background: snow;
    margin: 80px 0 0 380px;
    //height: 500px;
`

const SectionMenu = styled.section`
    padding: 30px;
`

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Burgers</h2>
            <ListItem
                itemList={dbMenu.burger}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
        <SectionMenu>
            <h2>Snacks / Drinks</h2>
            <ListItem
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
)

