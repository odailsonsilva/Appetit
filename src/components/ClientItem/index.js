import React, {useState, useEffect} from 'react';

import CheckboxImg from '../../assets/imgs/client-selected/checkbox.svg'
import { InputClient } from './styles';

function ClientItem(props) {
  const [selectedClient, setSelectedClient] = useState(false)
  const [quant, setQuant] = useState(null)

  function handleSelectedClien(){

    if(selectedClient === false){
       setSelectedClient(true)
       if(props.id === 1){
        setQuant(quant + 1)
       }else  if(props.id === 2){
        setQuant(quant + 1)
       }else  if(props.id === 3){
        setQuant(quant + 1)
       }else  if(props.id === 4){
        setQuant(quant + 1)
       }else  if(props.id === 5){
        setQuant(quant + 1)
       }else  if(props.id === 6){
        setQuant(quant + 1)
       }


    }else{
      setSelectedClient(false)
      if(props.id === 1){
        setQuant(quant - 1)
       }
    }
  }


  return(
    <InputClient
      onClick={handleSelectedClien}
    >
        <li className="item_list_conteiner item_client">
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

export default ClientItem;





// import React, {useState, useEffect} from 'react';

// import CheckboxImg from '../../assets/imgs/client-selected/checkbox.svg'
// import { InputClient } from './styles';

// function ClienItem(props) {
//   const [selectedClient, setSelectedClient] = useState(false)
//   const [quant, setQuant] = useState(null)

//   function handleSelectedClien(){

//     if(selectedClient === false){
//        setSelectedClient(true)
//        if(props.id === 1){
//         setQuant(quant + 1)
//        }else  if(props.id === 2){
//         setQuant(quant + 1)
//        }else  if(props.id === 3){
//         setQuant(quant + 1)
//        }else  if(props.id === 4){
//         setQuant(quant + 1)
//        }else  if(props.id === 5){
//         setQuant(quant + 1)
//        }else  if(props.id === 6){
//         setQuant(quant + 1)
//        }


//     }else{
//       setSelectedClient(false)
//       if(props.id === 1){
//         setQuant(quant - 1)
//        }
//     }
//   }


//   return(
//     <InputClient
//       onClick={handleSelectedClien}
//       to={quant !== 0 ? "/selecionar-cliente/checkout-client" : "/selecionar-cliente"}
//     >
//         <li className="item_list_conteiner item_client">

//           {
            
//           }
//         {
//          selectedClient ?  <div class="container-checkbox"><img src={CheckboxImg} className="checkbox"/></div>  : 
//                             <img src={props.url} alt="imagem-produto" />
//          }
//             <p>{props.title}</p>
//         </li>
//         {
//         props.no_divisor ? "" : <div className="divisor_li"></div>  
//         }
//   </InputClient>
//   );
// }

// export default ClienItem;