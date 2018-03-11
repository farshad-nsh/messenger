import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers'


let store = createStore(allReducers)
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
	document.getElementById('main')
);
