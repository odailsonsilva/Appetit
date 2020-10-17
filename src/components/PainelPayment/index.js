import React from 'react';

import { Container, HangleProgressBar } from './styles';

import Header from '../../components/Header'
import BoxRadio from '../../components/BoxRadio'
import Calender from '../../components/Calendar'
import ProgressBar from '../../components/ProgressBar'

function PainelPayment(props) {
  return (
    <Container className="scrollE">

      <div className="header_container_painel_two">
        <Header 
          title={props.title} 
          route={props.route} 
          icon={props.showIconBack}/>
      </div>

      <div className="container_info_painel">
        <p>{props.p}</p>
        <HangleProgressBar>
          <p>Passo {props.passo} de 3</p>
          <ProgressBar passo={props.passo}/>
        </HangleProgressBar>
        
        <h6>{props.h6}</h6>
        
        
        <div className="product_type" >
          <BoxRadio 
            radio_name_one="Não está pago" 
            radio_name_two="Já está pago"
          />
        </div>          
      </div>

      <div className="container_info_painel">
       <Calender />
      </div>
      

        
    </Container>
  );
}

export default PainelPayment;