import React from 'react'
import {ContainerBar} from './style'
import {MdKeyboardArrowRight} from 'react-icons/md'

export default function index(props) {
  return (
    <ContainerBar to={props.url}>
      
      <h6>{props.checkoutTitle}</h6>
        
      <div>
        <h6>Avançar</h6>
        <MdKeyboardArrowRight size={28} color="#fff" />
      </div>
    </ContainerBar>
  )
}
