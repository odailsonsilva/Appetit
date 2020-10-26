import React from 'react'
import {ContainerBar} from './style'
import {MdKeyboardArrowRight} from 'react-icons/md'

import {useHistory} from 'react-router-dom'

export default function Index(props) {
  const history = useHistory().location.pathname

  const saveClients = () => {
    localStorage.setItem("clients", JSON.stringify(props.selectedClient));
  };

  return (
    <ContainerBar
      to={props.url} 
      true={history !== "/novo-pedido/checkout-product" && props.active !== 1 ? 1 : 0}
      onClick={props.ativedClient ? () => saveClients() : ''}
     >
      
  <h6>{props.quant} {props.checkoutTitle}</h6>
        
      <div>
        <h6>Avançar</h6>
        <MdKeyboardArrowRight size={28} color="#fff" />
      </div>
    </ContainerBar>

  )
}


