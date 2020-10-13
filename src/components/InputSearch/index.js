import React from 'react'

import './style.css'

import IconSearch from '../../assets/imgs/icon-search.svg'
import IconFilter from '../../assets/imgs/icon-filter.svg'

export default function Index(props) {
  return (
      <form className="input_search">
        <img  src={IconSearch}/>
        <input type="text" placeholder="Procure o pedido aqui..."/>
        <img  src={IconFilter}/>
      </form>
  )
}
