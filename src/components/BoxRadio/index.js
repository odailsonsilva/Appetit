import React from 'react'
import {connect} from 'react-redux'

import {selectedInput} from '../../store/actions/inputActions'

import {Container} from './style'


function Index(props) {
  return (
    <>
    <Container> 
      <input value={1} type="radio" name="input_radio" id="input_radio" onClick={function(e) {
        props.handleChange(+e.target.value)
      }}   
      onChange={e => props.selectedInput(1)}
      />
      <label htmlFor="input_radio">{props.radio_name_one}</label>
    </Container>

    <Container > 
      <input value={2} type="radio" name="input_radio" id="input_radio2" onClick={function(e) {
        props.handleChange(+e.target.value)
      }}
      onChange={e => props.selectedInput(2)}
      />
      <label htmlFor="input_radio2">{props.radio_name_two}</label>
    </Container>
    </>
  )
}

function mapStateToProps(state){
  return{
    inputValue: state.inputValue.inputValue
  }
}

function mapDispatchToProps(dispatch){
  return{
    selectedInput(newValue){
      const action = selectedInput(newValue)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)