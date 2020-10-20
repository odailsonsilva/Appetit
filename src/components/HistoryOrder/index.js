import React, {cloneElement} from 'react'

import './style.css'

function index(props){
  return (
    <div className="history_container">
      <h3>
        {
         props.active ?  
          <span>{props.date}</span> :
          <> <span>{props.date},</span>
          <span className="you"> Você vendeu </span>
          <span>R$ {props.valueDay}</span> </>
        }
         
      </h3>
      {
        React.Children.map(props.children, child => {
          return cloneElement(child, props)
        })
      }
    </div>
  )

}

export default index