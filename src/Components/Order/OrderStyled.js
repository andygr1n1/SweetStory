import styled from "styled-components";
import bgImg from '../../image/premium.png'

export const OrderWrap = styled.section`
    position: fixed;
    top: 80px;
    left: 0;    
    max-width: 350px;
    width: 100%;
    height: calc(100% - 80px);
    z-index: 100;
    box-shadow: 3px 4px 6px rgba(145,5,5,0.23);    
    display: flex;
    flex-direction: row;   
    margin-left: -320px;
    transition: margin .5s;  
    background-image: url(${bgImg});  
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
  height: auto;
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
    padding: 20px;
    display: flex;
    flex-direction: column;   
    overflow: auto;
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
  
`

export const Text = styled.div`
  text-align: center;
  margin-bottom: 30px;
  flex: 1 1 auto;
`



export const Total = styled.div`
    display: flex;    
    margin: 0 35px 30px;
        & span:first-child {
        flex-grow: 1;
    };
`;

export const TotalPrice = styled.div`
    text-align: center;
    min-width: 65px;   
`

