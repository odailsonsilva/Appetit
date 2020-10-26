import React from 'react';

import { Container } from './styles';

import HeaderImg from '../../components/molecules/HeaderImg'
import PainelCheckout from '../../components/organisms/PainelCheckout'
import PainelPayment from '../../components/organisms/PainelPayment'
import SideBar from '../../components/organisms/SideBar/SideBar'



function Payment() {
  return (
    <Container >

        <div>
        <SideBar />
        </div>
        
        <div class="abstract_painel">
        <PainelCheckout showIconBack route="/selecionar-cliente"/>
        </div>
        
        <div>
          <HeaderImg />
          <PainelPayment 
            title="Informações para o pedido" 
            p="Preencha as informações abaixo para concluir esta venda."
            passo={3}
            h6="Para quem você está vendendo?"
            showIconBack
            route="/selecionar-cliente"
          />
        </div>
        
        
      </Container>
  );
}

export default Payment;