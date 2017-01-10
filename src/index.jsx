import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import AppComponent from './app/App.Component';
import reducer from './app/reducer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app'),
);
