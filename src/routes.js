import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import OrderList from './pages/OrderList'
import NewOrder from './pages/NewOrder'
import UserOrder from './pages/UserOrder'

export default function Routes(){

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/lista-de-pedidos" component={OrderList}/>  
        <Route path="/novo-pedido" component={NewOrder}/> 
        <Route path="/pedidos-do-usuario" component={UserOrder}/> 
      </Switch>
    </BrowserRouter>
  )
}