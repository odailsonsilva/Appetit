import React from 'react';

import SideBar from '../../components/SideBar/SideBar'
import BoxItem from '../../components/BoxItem'

import './style.css'

function OrderList() {
  return (
    <div className="container_order_list">
      <SideBar />
      <div className="container_main">
        <span className="profile_log" ></span>
        <header>
          Olá, Marcel!
        </header>
        {/* <BoxItem /> */}
      </div>
    </div>
  )
}

export default OrderList;