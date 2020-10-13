import React from 'react'

import './style.css'


export default function Index(props) {
  return (
    <div className="box_item">
      <img src={props.img} alt=""/>
      <div className="container_infos">
        <h6>{props.title}</h6>
        <p>{props.text}</p>
      </div>
      <div className="container_total">
        <h6>{props.value}</h6>
      </div>
    </div>
  )
}
