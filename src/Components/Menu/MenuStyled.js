import styled from 'styled-components'
import bgImg from "../../image/premium.png"
import {device} from "../UI/MediaQueries/MediaQueries";

export const MenuStyled = styled.main`
    background-color: snow;
    background-image: url(${bgImg});
    margin: 60px 0 0;
    width: 100%;
    
    @media ${device.laptop} {      
    }
`
export const SectionMenu = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;    
`
export const ParallaxImg1 = styled.img`
    position: absolute;
    right: 30px;
    height: 200px;
    z-index: 1;    
`
export const ParallaxImg2 = styled.img`
    position: absolute;
    left: 160px;
    height: 40px;
    z-index: 1;    
`

export const ExText = styled.div`    
    width: 30%;
    text-align: center;
    margin: 40px auto 10px;
    font-size: 30px;
    text-shadow: 1px 1px 0.3px rgb(40,39,39);
    color: #1b8f18;    
    font-family: 'Anton',sans-serif;
`

export const PreloaderData = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

