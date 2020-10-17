import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Btn = styled(Link)`
  width: 250px;
  height: 48px;

  background-color: #ff8822;
  border-radius: 100px;

  padding: 14px 80px;

  color: #fff;
  font-size: 1.4rem;
  line-height: 2.2rem;
  text-align: center;
  text-transform: uppercase;
  margin: 40px 16px 0  320px;

  @media(max-width: 1290px){
    display: none
  }
`