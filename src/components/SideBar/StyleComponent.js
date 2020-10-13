import styled from 'styled-components'

import IconOrders from '../../assets/imgs/icon-orders.svg'
import IconOrdersB from '../../assets/imgs/icon-orders-b.svg'


export const Icon = styled.span `
  background: ${props => props.activeAttr == true ? '#fff' : 'none'} 
  no-repeat;
  background-image: url(${props => props.icon});
  background-position: 25% center;
  
  display: flex;
  justify-content: center;
  align-items: center;

  opacity:  ${props => props.activeAttr === true ? 1 : 0.5};

  width: 100%;
  height: 56px;
`

