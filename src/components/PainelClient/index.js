import React, {useState} from 'react';
import {connect} from 'react-redux'

import Header from '../../components/Header'
import InputSearch from '../../components/InputSearch'
import ListItem from '../../components/ListItem'
import ClientItem from '../../components/ClientItem'
import CheckoutBar from '../../components/CheckoutBar'
import ProgressBar from '../../components/ProgressBar'

import ImgClient1 from '../../assets/imgs/profile/client-1.svg'
import ImgClient2 from '../../assets/imgs/profile/client-2.svg'
import ImgClient3 from '../../assets/imgs/profile/client-3.svg'

import './styles.css'

const clientsList = [
  {
    id: 1,
    name: "Justine Marshall",
    image: ImgClient1,
  },
  {
    id: 2,
    name: "Bairam Frootan",
    image: ImgClient2,
  },
  {
    id: 3,
    name: "Tua Manuera",
    image: ImgClient3,
  },
  {
    id: 4,
    name: "Justine Marshall",
    image: ImgClient1
  },
  {
    id: 5,
    name: "Bairam Frootan",
    image: ImgClient2,
  },
  {
    id: 6,
    name: "Tua Manuera",
    image: ImgClient3,
  },
]

function PainelClient(props) {
  const {quant} = props.quant

  const [seletedClient, setSelectedClient] = useState([])

  const addClient = (client) => {
    const desClient = {
      id: client.id,
      name: client.name,
      image: client.image
    }
  
    const findClient = seletedClient.find((i) => i.id === desClient.id)

    if(!findClient){
      setSelectedClient([...seletedClient, desClient])
    } else {
      const filterClient = seletedClient.filter(
        i => i.id !== desClient.id
      )
      setSelectedClient(filterClient)
    }
    
  }

  const quanti = seletedClient.length
  const arrowSelected = seletedClient


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



      <ListItem>
          {
            clientsList.map( client => 
              <ClientItem 
                key={client.id}
                client={client}
                select={() => addClient(client)}
              />
            )
          } 
      </ListItem>

      {
        seletedClient.length >= 1 &&
          <CheckoutBar  
            url="/status-de-pagamento" 
            active={1}
            selectedClient={arrowSelected}
            quant={quanti}
            ativedClient
          />
      }

      
    </div>
  );
}


function mapStateToProps(state){
  return{
    quant: state.quant
  }
}

export default connect(mapStateToProps)(PainelClient);