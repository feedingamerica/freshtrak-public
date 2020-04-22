import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  expect(() => {
    render(
      <Router>
        <App />
      </Router>
    );
  }).not.toThrowError();
});
