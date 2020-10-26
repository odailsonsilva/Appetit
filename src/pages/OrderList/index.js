 import React from 'react';

import SideBar from '../../components/organisms/SideBar/SideBar'
import BoxItem from '../../components/atoms/BoxItem'
import BtnAdd from '../../components/atoms/BtnAdd'
import InputSearch from '../../components/atoms/InputSearch'
import Header from '../../components/molecules/Header'
import HistoryOrder from '../../components/molecules/HistoryOrder'
import HeaderImg from '../../components/molecules/HeaderImg'


import Client1 from '../../assets/imgs/profile/client-1.svg'
import Client2 from '../../assets/imgs/profile/client-2.svg'
import Client3 from '../../assets/imgs/profile/client-3.svg'

import './style.css'

class OrderList extends React.Component {
 
  render(){
    return (
      <div className="container_order_list">
        <SideBar />
        <div></div>
        <div className="container_order">
        
          <HeaderImg disbl={true} /> 
          <div className="container_main">
         
            <Header title="Olá, Pedro!" none_margin/>
              <div>
              <BtnAdd/>
              <InputSearch filterActive/>
            </div>
            <HistoryOrder date="13/05/2019" valueDay="45,80">
              <BoxItem  img={Client1} 
                title="Marcel Batista" 
                text="cuscuz com calabresa, suco de laranja. " 
                value="R$ 3,50"
              />
              <BoxItem  img={Client2}
                title="Fernanda Siqueira" 
                text="Iogurte desnatado com maçã." 
                value="R$ 7,50"
               />
              <BoxItem 
                img={Client3} 
                title="Luiz Oliveira" 
                text="2x bolo frito, café c/ leite." 
                value="R$ 10,50"
               />
            </HistoryOrder>

            <HistoryOrder date="09/05/2019" valueDay="123,80">
              <BoxItem  
                img={Client1} 
                title="Fernanda Siqueira" 
                text="2x sanduíche de pão de arroz, vitamina de goiaba." 
                value="R$ 5,50"
              />
              <BoxItem  
                img={Client2}
                title="Fernanda Siqueira" 
                text="2x sanduíche de pão de arroz, vitamina de goiaba." 
                value="R$ 3,50"
              />
              <BoxItem 
                img={Client3} 
                title="Luiz Oliveira" 
                text="2x bolo frito, café c/ leite." 
                value="R$ 10,50"
               />
            </HistoryOrder>

            <HistoryOrder date="08/05/2019" valueDay="224,80">
              <BoxItem  
                img={Client1} 
                title="Fernanda Siqueira" 
                text="2x sanduíche de pão de arroz, vitamina de goiaba." 
                value="R$ 5,50"
              />
              <BoxItem  
                img={Client2}
                title="Luiz Oliveira" 
                text="2x bolo frito, café c/ leite." 
                value="R$ 3,50"
              />
              <BoxItem 
                img={Client3} 
                title="Luiz Oliveira" 
                text="2x bolo frito, café c/ leite." 
                value="R$ 10,50"
               />
            </HistoryOrder>
          </div>

        </div>
      </div>
    )
  }

 
}

export default OrderList;