import React, {useState} from 'react'

import {Container} from './style'

export default function Index(props) {

  return (
    <>
    <Container> 
      <input value={1} type="radio" name="input_radio" id="input_radio" onChange={function(e) {
        props.handleChange(Number(e.target.value))
      }}/>
      <label htmlFor="input_radio">{props.radio_name_one}</label>
    </Container>

    <Container > 
      <input value={2} type="radio" name="input_radio" id="input_radio2" onChange={function(e) {
        props.handleChange(Number(e.target.value))
      }}/>
      <label htmlFor="input_radio2">{props.radio_name_two}</label>
    </Container>
    </>
  )
}
