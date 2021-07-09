import './index';
import React from 'react';
import HEADER_W from './components/header/header_w';
import ITEM_PAGE_W from './components/itemPage/itemPage_w';
import CATEGORY_W from './components/category/category_w';
import CART_W from './components/cart/cart_w';
import CartStorage from './components/cartStorage/cartStorage';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <CartStorage />
        <HEADER_W />
        <Route path='/:categoryName?' render={() => <CATEGORY_W />} />
        <Route path='/cart'  render={() => <CART_W />} />
        <Route path='/item/:itemName?'  render={() => <ITEM_PAGE_W />} />
      </Provider>
    );
  }
}

export default App;
