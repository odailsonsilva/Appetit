import styled from 'styled-components'

export const ContainerBar = styled.div` 
  width: 100%;
  height: 68px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: #FAFAFA;

  position: sticky;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 40px;

  .btns-add-remove{
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      margin: 0 22px;
      width: 20px;
      text-align: center;
    }

    svg{
      cursor: pointer;
      flex: 1;
    }
  }

  button{
    background: none;
    border: none;
  }

  a{
    background: #ff8822;
    color: #fff;
    border-radius: 5px;
    border: none;

    width: 204px;
    height: 48px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.2rem;

    cursor: pointer;
  }

  @media(max-width: 400px){
    padding: 16px;
  
    a{
      width: 168px;
    }
  }
  
`

