import React from 'react';

import SideBar from '../../components/SideBar/SideBar'
import BoxItem from '../../components/BoxItem'
import Header from '../../components/Header'
import HistoryOrder from '../../components/HistoryOrder'

import Profile from '../../assets/imgs/profile/profile.svg'

import './style.css'

function NewOrder() {
  return (
    <div className="container_user_order">
        <SideBar />

        <div className="span-sideBar"></div>

        <div className="container">
          <div className="container_main">
            <Header activeIconBack={true}/>
            
            <HistoryOrder>
              <BoxItem img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
            </HistoryOrder>

            <HistoryOrder>
              <BoxItem  img={Profile} title="titulo" text="paragrafo" value="R$ 3,50"/>
            </HistoryOrder>
          </div>
        </div>
      </div>
  );
}

export default NewOrder;