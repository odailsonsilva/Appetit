import React, {useState, useContext} from 'react';
import './style.css';

import Header from '../../molecules/Header'
import BoxInput from '../../atoms/BoxRadio'
import CartBarOne from '../../molecules/CartBarOne'

import { CartContext} from '../../../context/Cart'

function PainelTwo(props) {
  const {setValueObs} = useContext(CartContext)


  const cartClient = localStorage.getItem("cartClient");
  const clientParse = JSON.parse(cartClient);
  const price = clientParse.price

  const [valueInput, setValueInput] = useState(null)
  const [valueFormat, setValueFormat] = useState(
    (price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  )

  function handleClickRadio(value){
    setValueInput(value)
  }
  
  const handleInputObs = (e) => {
    const value = e.target.value
    setValueObs(value)
  }
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
            <img src={clientParse.image} alt=""/>
            <div>
              <h6>{clientParse.title}</h6>
              <p>{valueFormat}</p>
            </div>
          </div>

          <div className="product_type" >
            <BoxInput 
            radio_name_one={clientParse.option[0]} 
            radio_name_two={clientParse.option[1]}  
            handleChange={handleClickRadio}
            ></BoxInput>
          </div>
          
        </div>

        <div className="divisor_lists"></div>

        <div className="comments_area">
          <p>Observações</p>
          <input type="text" placeholder="Observações" onChange={handleInputObs}/>
        </div>  
        
        <CartBarOne displayB={!valueInput ? true : false}/>
      </div> 
    ); 
}


export default PainelTwo