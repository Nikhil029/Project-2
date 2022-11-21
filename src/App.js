import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Home } from './Components/Home'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import {NotFound} from './Components/NotFound'
export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
