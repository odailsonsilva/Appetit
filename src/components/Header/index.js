import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

import IconBack from '../../assets/imgs/icon-back.svg'

export default function index(props) {
  return (
    <div >
      <div className="header_profile">
        <span className="profile_log" ></span>
      </div>
      
      <header className="header_container">
        <Link to="/lista-de-pedidos" >
          <img src={props.activeIconBack ? IconBack : ''}/>
        </Link>
        <h3>Olá, Marcel!</h3>
      </header>
    </div>
  )
}
