import React from 'react'

import {Container} from './styles'

import HeaderImg from '../../components/molecules/HeaderImg'
import PainelCheckout from '../../components/organisms/PainelCheckout'
import PainelClient from '../../components/organisms/PainelClient'
import SideBar from '../../components/organisms/SideBar/SideBar'


class ClientSelect extends React.Component {
  
  render(){
    return (
      <Container>
        <div>
        <SideBar />
        </div>

        <div class="abstract_painel">
         <PainelCheckout showIconBack route="/novo-pedido/checkout-product"/>
        </div>
        
        <div>
          <HeaderImg />
          <PainelClient  
            title="Informações para o pedido" 
            p="Preencha as informações abaixo para concluir esta venda."
            passo={2}
            h6="Para quem você está vendendo?"
            showIconBack
            route="/novo-pedido/checkout-product"
          />
        </div>
      </Container>
    )
  }
}

export default ClientSelect