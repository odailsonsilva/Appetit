import React from 'react'


import {Link} from 'react-router-dom'
import './style.css'

function Index(props) {
  const divImg = props.url === 'https://assets.instabuy.com.br/ib.item.image.big/b-93dff939ea034b21a77a7a32cf75dc09.jpeg' ? true : false

  return (
  
      <Link to={props.router ? "/detalhes-do-produto/1" : ""}>
        <li className="item_list_conteiner">
           <img src={props.url} alt="imagem-produto"/>     
           <p>{props.title}</p>
        </li>
        {
          props.no_divisor ? "" : <div className="divisor_li"></div>  
        }
        
      </Link>
   
  )
}



export default Index