import React from "react";
import styled from 'styled-components';
import DBSweet from "./DBSweet";
import {ListItem} from "./ListItem";
import {Banner} from "./Banner";
import {H2} from "../UI/H2";
import bgImgNewYear from "../../image/li-background.jpg"
import bgImgStandart from "../../image/li-background2.jpg"

const MenuStyled = styled.main`
    background: snow;
    margin: 80px 0 0 380px;
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
                bgImg={bgImgNewYear}
            />
        </SectionMenu>
        <SectionMenu>
            <H2 menuHeader>Desserts</H2>
            <ListItem
                itemList={DBSweet.desserts}
                setOpenItem={setOpenItem}
                bgImg={bgImgStandart}
            />
        </SectionMenu>
        <SectionMenu>
            <H2 menuHeader>Cookies</H2>
            <ListItem
                itemList={DBSweet.cookies}
                setOpenItem={setOpenItem}
                bgImg={bgImgStandart}
            />
        </SectionMenu>
        <SectionMenu>
            <H2 menuHeader>Drinks</H2>
            <ListItem
                itemList={DBSweet.drinks}
                setOpenItem={setOpenItem}
                bgImg={bgImgStandart}
            />
        </SectionMenu>


    </MenuStyled>
)

