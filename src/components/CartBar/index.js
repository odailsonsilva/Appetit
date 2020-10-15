import React from 'react'
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
      
      <button>
        Adicionar
        <span>R$ 3,50</span>
      </button>
    </ContainerBar>
  )
}
