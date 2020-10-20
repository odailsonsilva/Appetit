import React from 'react';
import {connect} from 'react-redux'

import {selectedClient, noFocus} from '../../store/actions/selectClientActions'
import { Container } from './styles';


function ClientItem(props) {
  
  const handleClickClient = () => {
    if(document.querySelector(".checkbox_class:checked")  ){
      props.selectedClient(1)
    }else if(document.querySelector(".checkbox_class") ){
      props.noFocus(0)
    }
  }

  
  return(
    <> 
    <Container
      src={props.url}
      onChange={handleClickClient}
    >
      <input type="checkbox" id={props.id} className="checkbox_class" value={props.id}/>
      <label htmlFor={props.id}>{props.title}</label>          
  </Container>
    {
    props.no_divisor ? "" : <div className="divisor_li"></div>  
    }
    </>
  );
  
}

function mapDispatchToProps(dispatch){
  return{
    selectedClient(newValue){
      const action = selectedClient(newValue)
      dispatch(action)
    },
    noFocus(newValue){
      const action = noFocus(newValue)
      dispatch(action)
    }
  }
}

function mapStateToProps(state){
  return{
    quant: state.quant
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientItem);

