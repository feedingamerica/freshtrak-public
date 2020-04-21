import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FamilyContainer from '../FamilyContainer.js';

test('it should render without errors', () => {
  expect(() => {
    render(
      <Router>
        <FamilyContainer />
      </Router>
    );
  }).not.toThrowError();
});
