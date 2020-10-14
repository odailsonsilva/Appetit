import React from 'react';
import './style.css';

import ImgTest from '../../assets/imgs/profile/profile.svg'

import Header from '../../components/Header'
import ListItem from '../../components/ListItem'
import ItemLi from '../../components/ItemLi'

function PainelTwo(props) {
  return (
      <div className="scrollE">
        <div className="header_container_painel_two">
          <Header title={props.title} showIconBack route="/lista-de-pedidos"/>
        </div>

        <div className="container_info_painel">
          <p>Preencha as informações abaixo para concluir esta venda.</p>
          <p>Passo {props.passo} de 3</p>
          <span></span>
          <h6>O que você está vendendo?</h6>
          <span></span>
        </div>

        <ListItem divisor>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
        </ListItem>

        <ListItem divisor>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
        </ListItem>

        <ListItem>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
        </ListItem>
        <button>Avançar</button>
      </div> 
    ); 
}

export default PainelTwo;