import React from 'react'
import {ContainerBar} from './style'
import {MdKeyboardArrowRight} from 'react-icons/md'

export default function index() {
  return (
    <ContainerBar>
      
      <h6>Total: R$ 3,25</h6>
        
      <div>
        <h6>Avançar</h6>
        <MdKeyboardArrowRight size={28} color="#fff" />
      </div>
    </ContainerBar>
  )
}
