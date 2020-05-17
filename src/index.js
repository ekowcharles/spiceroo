import React from 'react';
import ReactDom from 'react-dom';

import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';

import App from './app';

ReactDom.render(
  <CookiesProvider>
    <Router>
      <App />
    </Router>
  </CookiesProvider>,
  document.getElementById('root')
);
