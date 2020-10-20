import styled from 'styled-components';

import {Link} from 'react-router-dom'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 342px 1fr;
  background: #fafafa;
  height: 100vh;

  @media (max-width: 920px){
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export const Grid1 = styled.div`

`;


export const Grid2 = styled.div`
  width: 98%;
  
  display: grid;

  justify-items: center;
  margin: 0 auto;

  @media(max-width: 430px){
    width: 90%;
  }
`;


export const ContainerImg = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .img-main{
      margin-bottom: 40px;


      @media(max-width: 430px){
        width: 90%;
      }
  }

  & p{
      font-size: 2rem;
      font-weight: 3rem;
      
  }
`;

export const ContainerBtns = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 150px; 
  & .btn-order{
    margin-right: 16px; 
  }

  @media (max-width: 920px){
    margin-bottom: 0;

   
  }


  @media (max-width: 670px){
    flex-direction: column;

    & .btn-order{
    margin-right: 0; 
     }
  }
`;


    

export const BtnNew = styled(Link)`
  width: 30%;
  height: 48px;
  border: none;
  border-radius: 100px;

  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-weight: 600;
  text-align: center;

  background: #FF8822;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  

  @media (max-width: 670px){
    width: 80%;
    margin-top: 16px;
    order: -1
  }

  @media (max-width: 470px){
    width: 90%;
    margin-top: 16px;
    order: -1;
  }
`;
    
export const BtnOrder = styled(Link)`
  width: 30%;
  height: 48px;
  border: 2px solid rgba(0, 0, 0, 0.88);
  border-radius: 100px;
  

  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-weight: 600;
  text-align: center;

  color: rgba(0, 0, 0, 0.88);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 670px){
    width: 80%;
    margin-top: 16px;
  }

  @media (max-width: 470px){
    width: 90%;
    margin-top: 16px;
    
  }
`;
