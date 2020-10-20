import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ContainerBar = styled(Link)`
  width: 100%;
  height: 58px;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.2);
  background: #FF8822;

  position: sticky;
  bottom: 0;
  z-index: ${props=>props.true === 1 ? -999 : 0};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 40px;

  
  h6{
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #fff;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;

    h6{
      margin-right: 14px;
    }
  }

  @media(max-width: 400px){
    padding: 22px 14px
  }
`