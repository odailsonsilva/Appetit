import React from 'react'
import {Link} from 'react-router-dom'
import {MdAdd, MdRemove} from 'react-icons/md'

import {ContainerBar} from'./style'

export default function index() {
  return (
    <ContainerBar>
      <div className="btns-add-remove">
        <MdRemove size={24} color="ff8822"/>
        <p>1</p>
        <MdAdd size={24} color="ff8822"/>
      </div>
      
      <Link to="/novo-pedido/checkout-product">
        Adicionar
        <span>R$ 3,50</span>
      </Link>
    </ContainerBar>
  )
}
