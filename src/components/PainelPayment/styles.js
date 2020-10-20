import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;

    .container_info_painel{
        width: 90%;
    }

    @media(max-width: 400px){
     
      width: 100%;
    
    
  
    .container_info_painel{
       width: 95%;
       margin: 0 auto;
       overflow: hidden;
       display: flex;
       flex-direction: column;

       .barPay{
           width: 90%;
       }
     }
   }

`;

export const HangleProgressBar = styled.div`
    width: 90%;

    @media(max-width: 400px){
        width: 95%;
    }
`

export const BtnFinish = styled.form`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    margin-top: 40px;

   
    
    button{
        width: 208px;
        height: 48px;

        background: #ff8822;
        border-radius: 100px;
        border: none;
        color: #fff;
        opacity: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
       &:disabled{
        opacity: 0.5;
        cursor: no-drop;
       }
    }

`
