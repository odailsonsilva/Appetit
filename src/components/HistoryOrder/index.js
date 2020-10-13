import React, {cloneElement} from 'react'

import './style.css'

function index(props){
  return (
    <div className="history_container">
      <h3>asdasdasfasf</h3>
      {
        React.Children.map(props.children, child => {
          return cloneElement(child, props)
        })
      }
    </div>
  )

}

export default index