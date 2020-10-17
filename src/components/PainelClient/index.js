import React from 'react';

import Header from '../../components/Header'
import InputSearch from '../../components/InputSearch'
import ListItem from '../../components/ListItem'
import ItemLi from '../../components/ItemLi'
import CheckoutBar from '../../components/CheckoutBar'
import ProgressBar from '../../components/ProgressBar'

import ImgClient1 from '../../assets/imgs/profile/client-1.svg'
import ImgClient2 from '../../assets/imgs/profile/client-2.svg'
import ImgClient3 from '../../assets/imgs/profile/client-3.svg'

function PainelClient(props) {
  return (
    <div className="scrollE">
      <div className="header_container_painel_two">
        <Header 
          title={props.title} 
          route={props.route} 
          icon={props.showIconBack}/>
      </div>

      <div className="container_info_painel">
      <p>{props.p}</p>
        <p>Passo {props.passo} de 3</p>
        <ProgressBar passo={props.passo}/>
        <span></span>
        <h6>{props.h6}</h6>
        <InputSearch />
      </div>
      <ListItem >
          <ItemLi url={ImgClient1} title="Justine Marshall"/>
          <ItemLi url={ImgClient2} title="Bairam Frootan"/>
          <ItemLi url={ImgClient3} title="Tua Manuera" />
          <ItemLi url={ImgClient1} title="Justine Marshall" />
          <ItemLi url={ImgClient2} title="Bairam Frootan" />
          <ItemLi url={ImgClient3} title="Tua Manuera" no_divisor/>
      </ListItem>

      <CheckoutBar checkoutTitle="3 clientes selecionados" url="/status-de-pagamento"/>
    </div>
  );
}

export default PainelClient;