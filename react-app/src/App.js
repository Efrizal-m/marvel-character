import React from 'react'
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom'
import { Home, Heroes, Detail, Favorites } from './pages'
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2 shadow justify-content-flex-start">
        <div>
        <NavLink className="mr-3 text-white" to='/'>Home</NavLink>
        <NavLink className="mr-3 text-white" to='/heroes'>Heroes</NavLink>
        <NavLink className="text-white" to='/favorites'>Favorites</NavLink>
        </div>
      </nav>
      <div>
      <Switch>
        <Route path="/heroes/:id">
          <Detail></Detail>
        </Route>
        <Route path="/heroes">
          <Heroes className="flex-d justify-content-center"></Heroes>
        </Route>
        <Route path="/favorites">
          <Favorites className="flex-d justify-content-center"></Favorites>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        </Switch>      
      </div>
    </Provider>
  )
}