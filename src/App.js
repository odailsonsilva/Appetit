import React from 'react';
import {Provider} from 'react-redux'

import configStore from './store/storeConfig'
import Routes from './routes'
import GlobalStyles from './assets/styles/global'

const store = configStore()

function App() {
  return (
    <Provider store={store}>
      <Routes/>
      <GlobalStyles/>
    </Provider>
  );
}

export default App;
