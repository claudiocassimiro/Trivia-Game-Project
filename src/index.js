import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

ReactDOM.render(
  <HashRouter basename="/">
    <Provider store={ store }>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
