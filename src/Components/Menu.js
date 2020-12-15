import React from "react";
import styled from 'styled-components';
import dbMenu from "./DBMenu";
import {ListItem} from "./ListItem";
import BannerImg from "../image/banner.png"

const MenuStyled = styled.main`
    background: snow;
    margin-top: 80px;
    //height: 500px;
`

const MenuBanner = styled.div`
    height: 210px;
    width: 100%;
    background-image: url("${BannerImg}");
    background-position: center;
    background-size: cover;
`

const SectionMenu = styled.section`
    padding: 30px;
`

export const Menu = () => (
    <MenuStyled>
        <MenuBanner/>
        <SectionMenu>
            <h2>Burgers</h2>
            <ListItem itemList={dbMenu.burger}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Snacks / Drinks</h2>
            <ListItem itemList={dbMenu.other}/>
        </SectionMenu>
    </MenuStyled>
)

