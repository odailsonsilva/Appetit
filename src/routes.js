import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'

import OrderList from './pages/OrderList'

export default function Routes(){

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/lista-de-pedidos" component={OrderList}/>  
      </Switch>
    </BrowserRouter>
  )
}