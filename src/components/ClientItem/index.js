import React, {useState} from 'react';

import CheckboxImg from '../../assets/imgs/client-selected/checkbox.svg'
import { InputClient } from './styles';

function ClienItem(props) {
  const [selectedClient, setSelectedClient] = useState(false)
  const [click, setClick] = useState(0)

  function handleSelectedClien(){

    if(selectedClient === false){
       setSelectedClient(true)
       setClick(1)
       props.clientClick(click)
    }else{
      setSelectedClient(false)
    }
  }


  return(
    <InputClient
      onClick={handleSelectedClien}
      to={selectedClient ? "/selecionar-cliente/checkout-client" : "/selecionar-cliente"}
    >
        <li className="item_list_conteiner item_client">

          {
            
          }
        {
         selectedClient ?  <div class="container-checkbox"><img src={CheckboxImg} className="checkbox"/></div>  : 
                            <img src={props.url} alt="imagem-produto" />
         }
            <p>{props.title}</p>
        </li>
        {
        props.no_divisor ? "" : <div className="divisor_li"></div>  
        }
  </InputClient>
  );
}

export default ClienItem;