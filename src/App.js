import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import './pages/homepage/homepage.styles.scss';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
    
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>

    </div>
  );
}

export default App;
