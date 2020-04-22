import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const GA_ID = process.env.REACT_APP_GA_ID;
if (GA_ID) {
  ReactGA.initialize(GA_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(<App/>,document.getElementById('root'));
