import React from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import './App.css';
import Product from './screens/Product';
import Cart from './screens/Cart';
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
    <Nav/>
   <Switch>
     <Route path='/' exact component={Product}/>
     <Route path='/cart' exact component={Cart}/>
   </Switch>
    </BrowserRouter>
  );
}

export default App;
