import React from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
    <Nav/>
   <Switch>
     <Route path='/' exact component={Products}/>
     <Route path='/cart' exact component={Cart}/>
   </Switch>
    </BrowserRouter>
  );
}

export default App;
