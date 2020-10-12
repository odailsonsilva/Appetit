import React from 'react'

import './style.css'

export default function Input(props) {


  return (
    <div className="form-div">
      <input type={props.type}  className="form-input" required onChange={
        function(e){
          props.quandoAlterar(e.target.value)
        }
        }/>
      <span className="form-label">{props.name}</span>
    </div>
  )
}
 
