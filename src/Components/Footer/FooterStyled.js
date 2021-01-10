import styled from 'styled-components'
import {device} from "../UI/MediaQueries/MediaQueries";

export const FooterBlock = styled.footer`
  font-family: 'Roboto Condensed',sans-serif;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  background: linear-gradient(90deg, #2cb371 0%, #00b01d 37%, #0d8300 100%);
    
  @media ${device.tablet} {        
     justify-content: center;                   
  }
`;