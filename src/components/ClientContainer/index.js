import React, {useState} from 'react';

import { Container, InputClient, ContainerCheck } from './styles';

import ImgClient1 from '../../assets/imgs/profile/client-1.svg'
import ImgClient2 from '../../assets/imgs/profile/client-2.svg'
import ImgClient3 from '../../assets/imgs/profile/client-3.svg'
import CheckboxImg from '../../assets/imgs/client-selected/checkbox.svg'

function ClientContainer(props) {

  const [selectedClient, setSelectedClient] = useState(false)

  function handleSelectedClien(){
    let soma
    if(selectedClient === false ){
       setSelectedClient(true)
    }else{
      setSelectedClient(false)
    }
  }
  return (
        <Container>
            <InputClient
               
                >
                
                    <li className="item_list_conteiner"  >       {
                    selectedClient ?  <div class="container-checkbox"><img src={CheckboxImg} className="checkbox"/></div>  : 
                                        <img src={ImgClient1} alt="imagem-produto" />
                    }
                        <p>{props.title}</p>
                    </li>
                    {
                    props.no_divisor ? "" : <div className="divisor_li"></div>  
             }

            </InputClient>

            <InputClient
                onClick={handleSelectedClien}
                >
                
                    <li className="item_list_conteiner">
                    {
                    selectedClient ?  <div class="container-checkbox"><img src={CheckboxImg} className="checkbox"/></div>  : 
                                        <img src={ImgClient2} alt="imagem-produto" />
                    }
                        <p>{props.title}</p>
                    </li>
                    {
                    props.no_divisor ? "" : <div className="divisor_li"></div>  
                    }

            </InputClient>

            <InputClient
                onClick={handleSelectedClien}
                >
                
                    <li className="item_list_conteiner">
                    {
                    selectedClient ?  <div class="container-checkbox"><img src={CheckboxImg} className="checkbox"/></div>  : 
                                        <img src={ImgClient3} alt="imagem-produto" />
                    }
                        <p>{props.title}</p>
                    </li>
                    {
                    props.no_divisor ? "" : <div className="divisor_li"></div>  
                    }

            </InputClient>

            <InputClient
                onClick={handleSelectedClien}
                >
                
                    <li className="item_list_conteiner">
                    {
                    selectedClient ?  <div class="container-checkbox"><img src={CheckboxImg} className="checkbox"/></div>  : 
                                        <img src={ImgClient1} alt="imagem-produto" />
                    }
                        <p>{props.title}</p>
                    </li>
                    {
                    props.no_divisor ? "" : <div className="divisor_li"></div>  
                    }

            </InputClient>

            <InputClient
                onClick={handleSelectedClien}
                >
                
                    <li className="item_list_conteiner">
                    {
                    selectedClient ?  <div class="container-checkbox"><img src={CheckboxImg} className="checkbox"/></div>  : 
                                        <img src={ImgClient2} alt="imagem-produto" />
                    }
                        <p>{props.title}</p>
                    </li>
                    {
                    props.no_divisor ? "" : <div className="divisor_li"></div>  
                    }

            </InputClient>

            <InputClient
                onClick={handleSelectedClien}
                >
                
                    <li className="item_list_conteiner">
                    {
                    selectedClient ?  <div class="container-checkbox"><img src={CheckboxImg} className="checkbox"/></div>  : 
                                        <img src={ImgClient3} alt="imagem-produto" />
                    }
                        <p>{props.title}</p>
                    </li>
                    {
                    props.no_divisor ? "" : <div className="divisor_li"></div>  
                    }

            </InputClient>

        </Container>
    );
}

export default ClientContainer;