import React from 'react'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import './style.css'

function Index(props) {
  const {inputValue} = props

  return (
  
      <Link to={props.router ? "/detalhes-do-produto/1" : ""}>
        <li className="item_list_conteiner">
            {
              props.id === 1 && inputValue > 0 ? 
                <div className="ContaienrImg"><img className="check_img" src={props.url} alt="imagem-produto"/></div>
              : <img src={props.url} alt="imagem-produto"/> 
            }
               
           <p>{props.title}</p>
        </li>
        {
          props.no_divisor ? "" : <div className="divisor_li"></div>  
        }
        
      </Link>
   
  )
}

function mapStateToProps(state){
  return{
    inputValue: state.inputValue.inputValue
  }
}


export default connect(mapStateToProps)(Index)