import styled from "styled-components";
import bgImg from '../../image/premium.png'
import {device} from "../UI/MediaQueries/MediaQueries";

export const OrderWrap = styled.section`
    position: fixed;
    top: 0;
    left: 0;    
    max-width: 414px;
    width: 100%;
    height: 100%;    
    box-shadow: 3px 4px 6px rgba(145,5,5,0.23);    
    display: flex;
    flex-direction: row;     
    margin-left: -385px;
    transition: margin .5s;  
    background-image: url(${bgImg});
    z-index: 1; 
        
    @media ${device.mobileL} {       
         box-shadow: none;    
    }    
`;

export const OrderToggleBtn = styled.div`
  background: #af2d2f;  
  color: #f6f6f6;
  font-weight: bolder;
  font-size: 24px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
`

export const OrderToggleSymbol = styled.span`
  background: -webkit-linear-gradient(90deg, #2cb371 0%, #00b01d 37%, #0d8300 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 0.1px rgba(7,3,3,0.02);
`

export const OrderStyled = styled.div`
    width: 100%;
    height: 100%;     
    display: flex;
    flex-direction: column;   
    overflow: auto;
    padding: 130px 20px 20px;  
`;

export const OrderContent = styled.div`
     flex: 1 1 auto;

`
export const EmptyList = styled.p`
  text-align: center;
`

//OrderConfirm
export const ModalOrderConfirm = styled.div`
   padding-top: 40px;
   position: inherit;
   background-color: #fff;
   width: 400px;
   height: 75%;
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);   
   z-index: 1;
   background-image: url(${bgImg});
   
          
      @media${device.mobileL} {       
        width: 100%;
        height: 100%;
        border-radius: 0;
        padding-top: 60px;
      }      
`
export const ConfirmWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`


export const ConfirmInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  
  & h3 {
    margin-bottom: 10px;
    font-size: 40px;
  }
  
  & h4 {
    margin: 0;
    padding: 0;
    font-size: 30px;
    text-align: center;
    min-width: 65px;       
    color: #2cb371;
    font-weight: bolder;
    text-shadow: 1px 1px 0.5px rgb(40,39,39);;
  }
   
  }
  
`


export const Total = styled.div`
    display: flex;    
    justify-content: space-between;
    margin: 0 20px 20px 0;
    
        & span:first-child {
        flex-grow: 1;
        font-weight: bolder;
    };
`;

export const TotalPrice = styled.div`
    text-align: center;
    min-width: 65px;   
    margin-left: 25px;
    color: #2cb371;
    font-weight: bolder;
    text-shadow: 1px 1px 0.5px rgb(40,39,39);;
`

