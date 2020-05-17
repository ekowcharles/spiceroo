import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';

import App from './app';

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
