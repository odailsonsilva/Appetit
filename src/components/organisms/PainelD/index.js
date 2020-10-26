import React from 'react';
import './style.css';

import Header from '../../molecules/Header'
import Illustration from '../../../assets/imgs/Illustration.svg'

function PainelD(props) {
  return (
      <div className="sticky">
        <div className="header_container_painel">
          <Header title="Novo pedido" showIconBack route="/lista-de-pedidos" classFixed="header_fixed" icon={props.showIconBack}/>
        </div>

        <div className="painel_container">
          <img src={Illustration} alt="Illustration"/>
          <p>Acompanhe aqui um resumo desta venda.</p>
        </div>
      </div>
    );
}

export default PainelD;