import React from 'react';
import {Provider} from 'react-redux'

import configStore from './store/storeConfig'
import Routes from './routes'
import GlobalStyles from './assets/styles/global'
import CartProvider from './context/Cart';

const store = configStore()

function App() {
  return (
    <CartProvider>
        <Provider store={store}>
          <Routes/>
          <GlobalStyles/>
        </Provider>
    </CartProvider>

    
  );
}

export default App;
