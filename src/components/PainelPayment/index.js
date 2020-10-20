import React, {useState} from 'react';

import { 
  Container, 
  HangleProgressBar,
  BtnFinish
} from './styles';

import Header from '../../components/Header'
import BoxRadio from '../../components/BoxRadio'
import Calender from '../../components/Calendar'
import ProgressBar from '../../components/ProgressBar'

function PainelPayment(props) {

  const [valueInput, setValueInput] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)

  function handleClickRadio(value){
    setValueInput(value)
  }

  function handleSelectedDate(date){
    setSelectedDate(date)
  }

  return (
    <Container className="scrollE" >

      <div className="header_container_painel_two">
        <Header 
          title={props.title} 
          route={props.route} 
          icon={props.showIconBack}/>
      </div>

      <div className="container_info_painel">
        <p>{props.p}</p>
        
          <p>Passo {props.passo} de 3</p>
          <div className="barPay">
          <ProgressBar passo={props.passo}/>
          </div>
       
        
        <h6>{props.h6}</h6>
        
        
        <div className="product_type" >
          <BoxRadio 
            radio_name_one="Não está pago" 
            radio_name_two="Já está pago"
            handleChange={handleClickRadio}
          />
        </div>          
      </div>

      <div className="container_info_painel">
       <Calender 
        handleDate={handleSelectedDate}
       />
      </div>
      
      <BtnFinish action="/feedback-do-pedido">
        <button disabled={!valueInput || !selectedDate}>
          {
            !valueInput || !selectedDate ? 'FINALIZAR' : 'SALVAR'
          }
        </button>
      </BtnFinish>
        
    </Container>
  );
}

export default PainelPayment;