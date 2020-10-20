import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import OrderList from './pages/OrderList'
import NewOrder from './pages/NewOrder'
import UserOrder from './pages/UserOrder'
import ProductDetails from './pages/ProductDetails'
import ClientSelect from './pages/ClientSelect'
import Payment from './pages/Payment'
import FeedbackOrder from './pages/FeedbackOrder'

export default function Routes(){

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/lista-de-pedidos" component={OrderList}/>  
        <Route path="/novo-pedido" component={NewOrder}/> 
        <Route path="/pedidos-do-usuario/:id" component={UserOrder}/> 
        <Route path="/detalhes-do-produto/:id" component={ProductDetails}/> 
        <Route path="/novo-pedido/checkout-product" component={NewOrder}/>
        <Route path="/selecionar-cliente" component={ClientSelect}/>
        <Route path="/status-de-pagamento" component={Payment}/>
        <Route path="/feedback-do-pedido" component={FeedbackOrder}/>
      </Switch>
    </BrowserRouter>
  )
}