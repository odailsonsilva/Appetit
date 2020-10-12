import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import RequestList from './pages/RequestList'

export default function Routes(){

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/lista-de-pedidos" component={RequestList}/>  
      </Switch>
    </BrowserRouter>
  )
}