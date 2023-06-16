import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

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
