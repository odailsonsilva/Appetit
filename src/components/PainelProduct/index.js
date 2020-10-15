import React from 'react';
import './style.css';

import Header from '../../components/Header'
import {BoxInput} from '../../components/BoxRadio'
import {Btn} from '../Btn'
import ProfileImg from '../../assets/imgs/profile/profile.svg'

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

          <div className="product_detail_order">
            <img src={ProfileImg} alt=""/>
            <div>
              <h6>Cuscuz completo</h6>
              <p>R$ 3,25</p>
            </div>
          </div>

          <div className="product_type">
            <BoxInput>
              <label htmlFor="">
                <input type="radio" name="type_prod"/>
                Milho
              </label>
            </BoxInput>

            <BoxInput>
              <label htmlFor="">
                <input type="radio" name="type_prod"/>
                Arroz
              </label>
            </BoxInput>
          </div>
          
        </div>

        <div className="divisor_lists"></div>

        <div className="comments_area">
          <p>Observações</p>
          <input type="text" placeholder="Observações"/>
        </div>  
      </div> 
    ); 
}

export default PainelTwo;