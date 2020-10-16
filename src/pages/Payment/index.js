import React from 'react';

import { Container } from './styles';

import HeaderImg from '../../components/HeaderImg'
import PainelD from '../../components/PainelD'
import PainelPayment from '../../components/PainelPayment'
import SideBar from '../../components/SideBar/SideBar'


function Payment() {
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
          <PainelPayment 
            title="Informações para o pedido" 
            p="Preencha as informações abaixo para concluir esta venda."
            passo={3}
            h6="Para quem você está vendendo?"
          />
        </div>
        
        
      </Container>
  );
}

export default Payment;