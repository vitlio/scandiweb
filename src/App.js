import './index';
import React from 'react';
import HEADER_W from './components/header_w';
import ITEM_PAGE_W from './components/itemPage_w';
import CATALOG_W from './components/catalog_w';
import CART_W from './components/cart_w';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <HEADER_W />
        <CATALOG_W />
        <Route path='/cart'  render={() => <CART_W page={'cart'}/>} />
        <Route path='/item'   render={() => <ITEM_PAGE_W/>} />
      </Provider>
    );
  }
}

export default App;
