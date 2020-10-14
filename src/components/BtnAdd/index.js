import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

import IconAdd from '../../assets/imgs/icon-add.svg'

export default function Index(props) {
  return (
    <Link to="/novo-pedido">
      <div className="btn_add">
        <img src={IconAdd} alt=""/>
        <div className="container_infos">
          <p>fazer novo pedido</p>
        </div>
      </div>
    </Link>
  )
}
