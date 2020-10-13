import React from 'react'

import './style.css'

import IconAdd from '../../assets/imgs/icon-add.svg'

export default function Index(props) {
  return (
    <div className="btn_add">
      <img src={IconAdd} alt=""/>
      <div className="container_infos">
        <p>fazer novo pedido</p>
      </div>
    </div>
  )
}
