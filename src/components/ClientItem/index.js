import React from 'react';
import {connect} from 'react-redux'

import { Container } from './styles';


function ClientItem({client, select}) {

  const handleClickClient = () => {
    if(document.querySelector(".checkbox_class:checked")  ){
      select(client)
    }else if(document.querySelector(".checkbox_class") ){
      select(client)
    }
  }

  
  return(
    <> 
    <Container
      src={client.image}
      onChange={handleClickClient}
      key={client.id}
    >
      <input type="checkbox" id={client.id} className="checkbox_class" value={client.id}/>
      <label htmlFor={client.id}>{client.name}</label>          
  </Container>
    {
    client.no_divisor ? "" : <div className="divisor_li"></div>  
    }
    </>
  );
  
}

function mapStateToProps(state){
  return{
    quant: state.quant
  }
}

export default connect(mapStateToProps)(ClientItem);

