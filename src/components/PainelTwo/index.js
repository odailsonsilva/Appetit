import React from 'react';
import './style.css';

import ImgTest from '../../assets/imgs/profile/profile.svg'

import Header from '../../components/Header'
import ListItem from '../../components/ListItem'
import ItemLi from '../../components/ItemLi'
import {Btn} from '../Btn'
import InputSearch from '../InputSearch'

function PainelTwo(props) {
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

        <div>
          {

          }
        </div>
          <p>Passo {props.passo} de 3</p>
          <span></span>
          <h6>{props.h6}</h6>
          <InputSearch />
        </div>

        <ListItem divisor>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo" no_divisor/>
        </ListItem>

        <ListItem divisor>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo" no_divisor/>
        </ListItem>

        <ListItem>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo"/>
          <ItemLi img={ImgTest} title="Cuscuz completo" no_divisor/>
        </ListItem>
  
        <Btn to="" className="btn_next">Avancar</Btn>
      
        
      </div> 
    ); 
}

export default PainelTwo;