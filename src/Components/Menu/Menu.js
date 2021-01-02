import React from "react";
import styled from 'styled-components';
import {ListItem} from "./ListItem";
import {Banner} from "./Banner";
import {H2} from "../UI/H2";
import bgImg from "../../image/premium.png"
import bgImgNewYear from "../../image/li-background.jpg"
import bgImgStandart from "../../image/li-background2.jpg"
import RellaxWrapper from "react-rellax-wrapper";
import parallaxImg1 from "../../image/parallax1.png"
import parallaxImg2 from "../../image/parallax2.png"
import {Preloader} from "../UI/Preloader";

const MenuStyled = styled.main`
    background-color: snow;
    background-image: url(${bgImg});
    margin: 80px 0 0 380px;
`
const SectionMenu = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    z-index: 9;    
`
const ParallaxImg1 = styled.img`
    position: absolute;
    right: -10px;
    height: 200px;
    z-index: -9;    
`
const ParallaxImg2 = styled.img`
    position: absolute;
    left: -10px;
    height: 50px;
    z-index: -9;    
`

const ExText = styled.div`    
    width: 30%;
    text-align: center;
    margin: 40px auto 10px;
    font-size: 30px;
    text-shadow: 1px 1px 0.3px rgb(40,39,39);
    color: #1b8f18;    
    font-family: 'Anton',sans-serif;
`

const PreloaderData = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Menu = ({DBSweetStory}) => {

    console.log('DBSweetStory', DBSweetStory);

    return (
        <MenuStyled>
            <Banner/>
            {
                DBSweetStory
                    ? <>
                    <SectionMenu>
                        <H2 newYearOffer>New Year Offer</H2>
                        <ListItem
                            itemList={DBSweetStory.newYear}
                            bgImg={bgImgNewYear}


                        />
                    </SectionMenu>
                    <RellaxWrapper speed={2} center={true}>
                        <ParallaxImg1 src={parallaxImg1} alt="parallax"/>
                    </RellaxWrapper>
                    <SectionMenu>
                        <H2 menuHeader>Desserts</H2>
                        <ListItem
                            itemList={DBSweetStory.desserts}
                            bgImg={bgImgStandart}
                        />
                    </SectionMenu>
                    <RellaxWrapper speed={2} center={false}>
                        <ParallaxImg2 src={parallaxImg2} alt="parallax"/>
                    </RellaxWrapper>
                    <SectionMenu>

                        <H2 menuHeader>Cookies</H2>
                        <ListItem
                            itemList={DBSweetStory.cookies}
                            bgImg={bgImgStandart}
                        />
                    </SectionMenu>
                    <SectionMenu>
                        <H2 menuHeader>Drinks</H2>
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

