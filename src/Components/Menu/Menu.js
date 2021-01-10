import React from "react";
import {useFetch} from "../Hooks/useFetch";
import {ExText, MenuStyled, ParallaxImg1, ParallaxImg2, PreloaderData, SectionMenu} from "./MenuStyled"
import {ListItem} from "./ListItem";
import {Banner} from "./Banner";
import {H2} from "../UI/H2";
import bgImgNewYear from "../../image/li-background.jpg"
import bgImgStandart from "../../image/li-background2.jpg"
import RellaxWrapper from "react-rellax-wrapper";
import parallaxImg1 from "../../image/parallax1.png"
import parallaxImg2 from "../../image/parallax2.png"
import {Preloader} from "../UI/Animation/Preloader";

import bannerImg from "../../image/banner-cookie-store.png"



export const Menu = () => {
    const DBSweetStory =  useFetch().response;

    return (
        <MenuStyled>
            <Banner src={bannerImg} alt="banner"/>
            {
                DBSweetStory
                    ? <>
                    <SectionMenu>
                        <H2 newYearOffer> ❅ Happy New Year Offer ❅</H2>
                        <ListItem
                            itemList={DBSweetStory.newYear}
                            bgImg={bgImgNewYear}
                        />
                    </SectionMenu>
                    <RellaxWrapper speed={2} center={true}>
                        <ParallaxImg1 src={parallaxImg1} alt="parallax"/>
                    </RellaxWrapper>
                    <SectionMenu>
                        <H2>Desserts</H2>
                        <ListItem
                            itemList={DBSweetStory.desserts}
                            bgImg={bgImgStandart}
                        />
                    </SectionMenu>
                    <RellaxWrapper speed={2} center={false}>
                        <ParallaxImg2 src={parallaxImg2} alt="parallax"/>
                    </RellaxWrapper>
                    <SectionMenu>
                        <H2>Cookies</H2>
                        <ListItem
                            itemList={DBSweetStory.cookies}
                            bgImg={bgImgStandart}
                        />
                    </SectionMenu>
                    <SectionMenu>
                        <H2>Drinks</H2>
                        <ListItem
                            itemList={DBSweetStory.drinks}
                            bgImg={bgImgStandart}
                        />
                    </SectionMenu>
                    </>
                    :<PreloaderData>
                        <ExText>Loading</ExText>
                        <Preloader />
                    </PreloaderData>
            }
        </MenuStyled>
    )
}

