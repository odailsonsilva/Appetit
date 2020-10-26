import React,{cloneElement} from 'react'

import './style.css'

export default function Index(props) {

  return (
    <>
    <div className="container_list_item">  
      <h3>{props.title_Ul}</h3>
      <ul className="list_item_container" >
        {
          React.Children.map(props.children, child => {
            return cloneElement(child, props) 
          })
        }
      </ul>
    </div>
    {props.n_divisor ?  ""  : <div className="divisor_lists"></div>}
  </>
  )
}
