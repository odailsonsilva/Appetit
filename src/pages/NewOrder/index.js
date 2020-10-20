import React from 'react';

import  './style.css';

import SideBar from '../../components/SideBar/SideBar'
import HeaderImg from '../../components/HeaderImg'
import Painel from '../../components/PainelD'
import PainelTwo from '../../components/PainelTwo'


function NewOrder(props) {


  return (
      <div className="container_new_order">
        <div className="side">
          <SideBar />
        </div>
        
        <div className="container_order main_new_order">          
        
          <div className="container_main">

            <div class="abstract_painel">
              <Painel className="painel" showIconBack />
            </div>
            
            <div className="products">
              <HeaderImg /> 
              <PainelTwo  
                title="Informações para o pedido" 
                p="Preencha as informações abaixo para concluir esta venda."
                passo={1}
                h6="O que você está vendendo?"
                showIconBack
                route="/lista-de-pedidos"
                
              />
            </div>

          </div>
        </div>
      </div>
  );
}

export default NewOrder;