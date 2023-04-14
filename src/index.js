import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

axios.interceptors.request.use(function (config) {
  console.log('Interseptors data', config)
  config.headers = {
    'My-custom-field': 'foobar'
  }
  return config;
}, function (error) {
  console.log('Interseptors error')
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


