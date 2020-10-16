import React from 'react'

import {Container} from './styles'

import HeaderImg from '../../components/HeaderImg'
import PainelD from '../../components/PainelD'
import PainelClient from '../../components/PainelClient'
import SideBar from '../../components/SideBar/SideBar'


class ClientSelect extends React.Component {
  
  render(){
    return (
      <Container>
        <div>
        <SideBar />
        </div>

        <div class="abstract_painel">
         <PainelD showIconBack/>
        </div>
        
        <div>
          <HeaderImg />
          <PainelClient  
            title="Informações para o pedido" 
            p="Preencha as informações abaixo para concluir esta venda."
            passo={2}
            h6="Para quem você está vendendo?"
          />
        </div>
      </Container>
    )
  }
}

export default ClientSelect