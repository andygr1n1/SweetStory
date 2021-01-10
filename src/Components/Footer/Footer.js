import React from 'react';
import styled from 'styled-components'
import {FooterBlock} from "./FooterStyled";
import {LogoSweetStory} from "../UI/LogoSweetStory";

const Creator = styled.div`
  color: snow;
  font-weight: bolder;
  font-size: 16px;
`


export const Footer = () => {

    return  (
        <FooterBlock>
            <LogoSweetStory f />
            <Creator>☯ Andrew Grini ☯</Creator>
        </FooterBlock>
    )
}