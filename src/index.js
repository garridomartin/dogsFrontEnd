import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import axios from 'axios';

//axios.default.baseUrl = 'http://localhost:3001';//para usar solo desde mi pc
axios.default.baseUrl = 'dogsbackend-production-3cd7.up.railway.app';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app-container'>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
