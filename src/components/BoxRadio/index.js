import React from 'react'

import {Container} from './style'

export default function index(props) {

  return (
    <>
    <Container > 
      <input value={0} type="radio" name="input_radio" id="input_radio"/>
      <label htmlFor="input_radio">{props.radio_name_one}</label>
    </Container>

    <Container > 
      <input value={1} type="radio" name="input_radio" id="input_radio2"/>
      <label htmlFor="input_radio2">{props.radio_name_two}</label>
    </Container>
    </>
  )
}
