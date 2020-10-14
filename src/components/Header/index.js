import React from 'react'
import {Link} from 'react-router-dom'

import IconBack from '../../assets/imgs/icon-back.svg'
import './style.css'

export default function index(props) {
  return (
    <div className="header_component">
      <header className="header_container">
        {
          props.showIconBack ? 
            <Link to={props.route}>
              <img src={IconBack} alt="voltar"/>
            </Link> 
          : ''
        }
        
        <h3>{props.title}</h3>

      </header>
      <div className="line_bottom"></div>
    </div>
  )
}
