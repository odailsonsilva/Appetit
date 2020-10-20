import styled from 'styled-components';

import Calender from '../../assets/imgs/calender.svg'

export const ContainerCalenderMain = styled.div`
  margin-top: 24px;
  position: relative;

  h6{
    font-size: 1.6rem;
    line-height: 2.4rem
    font-weight: 600;
    color: rgba(0, 0, 0, 0.88);

    margin-bottom: 24px;
  }  
`

export const Container = styled.div`
  background: #ffffff;
  width: 308px;
  height: 348px;
  padding: 16px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: none;
  flex-direction: column;
  justify-content: space-around;

  position: absolute;
  top: -245px; 
  left: 0;

  @media(max-width: 400px){
      top: -300px;
      left: 0px;
  }
`;

export const HeaderCalender = styled.div`

    h3{
        font-size: 2.4rem;
        line-height: 3.6rem; 
        text-transform: lowercase;
    }

    & h6{
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 2.4rem;
        margin: 0
    }

`

export const ContainerArrows = styled.div`
    display: flex;
    justify-content: space-between;
    padding:16px 24px;
    margin: -20px 0 ;

    div{
        width: 100%;
        text-align: center;

        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: 600;
    }
`
export const BtnBack = styled.img`

`

export const BtnNext = styled.img`
    
`

export const ContainerDaysMonth = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr)    
`

export const DateItem = styled.button`
    border: none;
    background: none;
    margin: 2px;

    padding-bottom: 9px;

    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
`

export const DateItemWeekDay = styled.span`
    width: 32px;
    height: 32px;
    justify-content: center;
    padding: 5px;

    color: rgba(0, 0, 0, 0.56);
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.8rem;
`

export const DateItemNumber = styled.span`
    display: inline-block;
    border-radius: 100%;
    width: 32px;
    height: 18px;
    justify-content: center;
    padding: 5px;

    text-align: center;
    font-size: 12px;
    line-height: 1.8rem;
    color: rgba(0, 0, 0, 0.38);
`

export const ContainerBtn = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;

    button{
        border: none;
        background: none;

        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: 600;
        text-transform: uppercase; 
        
        cursor: pointer;
    }

    button.cancelar{
        margin-right: 24px;
        color: rgba(0, 0, 0, 0.38);
    }

    button.escolher{
        margin-right: 16px;
        color: #FF8822;
    }
`

/*FORMATAÇÃO DO INPUT CALENDER */
export const InputCalender = styled.input`
   cursor: pointer;

   width: 100%;
   height: 56px;
   box-sizing: border-box;
   border-radius: 5px;
   border: 1px solid rgba(0, 0, 0, 0.3);

   background: #fff url(${Calender}) no-repeat 98% center;

   font-size: 1.6rem;
   line-height: 2.4rem;
   color: rgba(0, 0, 0, 0.9);
   padding: 16px;


   @media(max-width: 1290px){
       width: 100%;
   }
  
`