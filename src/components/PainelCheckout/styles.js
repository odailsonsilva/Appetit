import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 76px;

  @media(max-width: 1024px){
    display: none;
  }

  div.divisor{
    border-bottom: 8px solid rgba(0, 0, 0, 0.08);
  }

  .header_container_painel_two.header-chckout{
      margin-top: 76px;
  }
`;

export const CheckoutList = styled.ul`
    margin: 0 40px;
    list-style: none;
    
    
    h4{
        margin-top: 16px;
        font-size: 2.0rem;
        line-height: 3.0rem;
        color: rgba(0, 0, 0, 0.88);
    }

    p{
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: rgba(0, 0, 0, 0.87);
        margin-bottom: 16px;
    }
`

export const CheckoutItem = styled.li`
   margin:16px 0 24px;
   display: flex;
   justify-content: space-between;
   align-self: center;

   div {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    text-align: center;
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;  
            justify-self: flex-start;   
            margin-right: 16px;  
        }

        p{
            font-size: 1.6rem;
            line-height: 2.4rem;
            font-weight: 600;
            width: 100%;
            padding-top: 8px;
        }
   }

`

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 90%;
    margin: 16px auto;

    p{
        font-size: 2rem;
        line-height: 3rem;
        color: rgba(0, 0, 0, 0.88);
    }

    p.value{
        color: rgba(0, 0, 0, 0.56);
    }
    
`