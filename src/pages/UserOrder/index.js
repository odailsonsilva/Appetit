import React from 'react';

import SideBar from '../../components/organisms/SideBar/SideBar'
import BoxItem from '../../components/atoms/BoxItem'
import Header from '../../components/molecules/Header'
import HistoryOrder from '../../components/molecules/HistoryOrder'
import HeaderImg from '../../components/molecules/HeaderImg'

import './style.css'

function NewOrder() {
  return (
    <div className="container_user_order">
        <SideBar />

        <div className="span-sideBar"></div>

        <div className="container">
          <div className="container_main">
          <HeaderImg />
            <Header icon route="/lista-de-pedidos" title="Pedidos de Luiz" none_margin/>
            
            <HistoryOrder active date="13/05/2019">
              <BoxItem img="https://img.itdg.com.br/tdg/images/recipes/000/178/357/328308/328308_original.jpg?w=1200"               
              title="2x bolo frito, café c/ leite." text="R$ 3,50" value=''/>
            </HistoryOrder>

            <HistoryOrder active date="09/05/2019">
              <BoxItem  img="https://img.itdg.com.br/tdg/images/recipes/000/178/357/328308/328308_original.jpg?w=1200" 
              title="2x sanduíche de pão de arroz, vitamina de goiaba." text="R$ 10,50" value=""/>
            </HistoryOrder>
          </div>
        </div>
      </div>
  );
}

export default NewOrder;