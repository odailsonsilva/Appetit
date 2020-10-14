import React from 'react'

import './style.css'

export default function index(props) {
  return (
      <>
        <li className="item_list_conteiner">
            <img src={props.img} alt="imagem-produto"/>
            <p>{props.title}</p>
        </li>
        <div className="divisor_li"></div>
      </>
  )
}
