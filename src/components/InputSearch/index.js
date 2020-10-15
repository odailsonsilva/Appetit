import React from 'react'

import './style.css'

import IconSearch from '../../assets/imgs/icon-search.svg'
import IconFilter from '../../assets/imgs/icon-filter.svg'

export default function Index(props) {
  return (
      <form className="input_search">
        <label htmlFor="search" className="cursor"><img  src={IconSearch}/></label>
        <input type="text" placeholder="Procure o pedido aqui..." id="search"/>
        {
          props.filterActive ? 
          <img  src={IconFilter} className="cursor"/> : ''
        }
      </form>
  )
}
