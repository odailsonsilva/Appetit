import React, {useState} from 'react';
import './style.css';

import Header from '../../components/Header'
import BoxInput from '../../components/BoxRadio'
import CartBarOne from '../CartBarOne'

function PainelTwo(props) {
  const [valueInput, setValueInput] = useState(null)

  function handleClickRadio(value){
    setValueInput(value)
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
            <img src="https://abrilmdemulher.files.wordpress.com/2019/01/cuscuz-paulista-moderno.jpg?quality=90&strip=info&w=680&h=453&crop=1" alt=""/>
            <div>
              <h6>Cuscuz completo</h6>
              <p>R$ 3,25</p>
            </div>
          </div>

          <div className="product_type" >
            <BoxInput 
            radio_name_one="Milho" 
            radio_name_two="Arroz" 
            handleChange={handleClickRadio}
            ></BoxInput>
          </div>
          
        </div>

        <div className="divisor_lists"></div>

        <div className="comments_area">
          <p>Observações</p>
          <input type="text" placeholder="Observações"/>
        </div>  
        
        <CartBarOne displayB={!valueInput ? true : false}/>
      </div> 
    ); 
}


export default PainelTwo