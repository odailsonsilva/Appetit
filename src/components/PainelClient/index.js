import React, {useState} from 'react';

import Header from '../../components/Header'
import InputSearch from '../../components/InputSearch'
import ListItem from '../../components/ListItem'
import ClientItem from '../../components/ClientItem'
import CheckoutBar from '../../components/CheckoutBar'
import ProgressBar from '../../components/ProgressBar'

import ImgClient1 from '../../assets/imgs/profile/client-1.svg'
import ImgClient2 from '../../assets/imgs/profile/client-2.svg'
import ImgClient3 from '../../assets/imgs/profile/client-3.svg'

function PainelClient(props) {
  const [cliets, setClients] = useState(null)

  function handleQuantClients(client){
    setClients(client)
  }

  console.log(cliets)

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
          <ClientItem url={ImgClient1} title="Justine Marshall" clientClick={handleQuantClients} path="/selecionar-cliente/checkout-client"/>
          <ClientItem url={ImgClient2} title="Bairam Frootan"  clientClick={handleQuantClients}/>
          <ClientItem url={ImgClient3} title="Tua Manuera" clientClick={handleQuantClients} />
          <ClientItem url={ImgClient1} title="Justine Marshall" clientClick={handleQuantClients} />
          <ClientItem url={ImgClient2} title="Bairam Frootan" clientClick={handleQuantClients} />
          <ClientItem url={ImgClient3} title="Tua Manuera" clientClick={handleQuantClients}  no_divisor/>
      </ListItem>

      <CheckoutBar checkoutTitle="3 clientes selecionados" url="/status-de-pagamento" true={1}/>
    </div>
  );
}

export default PainelClient;