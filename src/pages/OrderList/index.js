import React from 'react';

import SideBar from '../../components/SideBar/SideBar'
import BoxItem from '../../components/BoxItem'
import BtnAdd from '../../components/BtnAdd'
import InputSearch from '../../components/InputSearch'
import Header from '../../components/Header'


import './style.css'

function OrderList() {
  return (
    <div className="container_order_list">
      <SideBar />
      <div className="container">
        <div className="container_main">
          <Header />
          <div>
            <BtnAdd />
            <InputSearch />
          </div>
          {/* <BoxItem /> */}
        </div>
      </div>
    </div>
  )
}

export default OrderList;