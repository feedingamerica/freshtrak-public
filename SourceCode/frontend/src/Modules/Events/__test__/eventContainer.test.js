import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import EventContainer from '../EventContainer';
import axios from 'axios';
import { mockFoodBank } from '../../../Testing'

jest.mock('axios');

test('should load without errors', () => {
  expect(() => {
    render(
      <Router>
        <EventContainer location={{ state: '' }} />
      </Router>
    );
  }).not.toThrowError();
});

test('Successful api call', async () => {
  const successResponse = {
    data: {
      foodbanks: [mockFoodBank]
    },
    status: 200,
    statusText: 'OK',
  }
  axios.get.mockImplementation(() => Promise.resolve(successResponse));
  
  const { getByText, getByLabelText, getAllByText, getByTestId } = render(
    <Router>
      <EventContainer location={{ state: '' }} />
    </Router>
  );

  fireEvent.change(
    getByLabelText(/zip/i, { id: 'search-zip'}),
    {
      target: { value: `${mockFoodBank.zip}` }
    }
  );

  // For some reason react bootstrap refuses to allow data attributes to bubble down
  // There is no other way to uniquely select the submit button
  // TODO find a different way. This is fragile.
  const button = getAllByText(/search for resources/i)[0];
  fireEvent.click(button);
  getByTestId(/loading/i);
  await waitFor(() => {
    getByText(mockFoodBank.name);
  });
});
