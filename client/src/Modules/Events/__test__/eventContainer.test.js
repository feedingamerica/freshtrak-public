import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, wait } from '@testing-library/react';
import EventContainer from '../EventContainer';
import axios from 'axios';
import { mockFoodBank } from '../../../Testing'

jest.mock('axios');

jest.mock('../EventListContainer', () => () => <mock-event-list-container />);

// Suppress the moment warning. This is a consequence of using test-data-bot
// and does not show in reality 
const originalWarn = console.warn.bind(console.warn);
beforeAll(() => {
  console.warn = (msg) => 
    !msg.toString().includes('Deprecation warning') && originalWarn(msg)
});
afterAll(() => {
  console.warn = originalWarn
});

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
  await wait(() => {
    getByText(mockFoodBank.name);
  });
});

test('Failed api call', async () => {
  const failedResponse = {
    status: 500,
    statusText: 'ERROR',
  };
  axios.get.mockImplementation(() => Promise.reject(failedResponse));
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

  const button = getAllByText(/search for resources/i)[0];
  fireEvent.click(button);
  getByTestId(/loading/i);
  await wait(() => {
    getByText(/something went wrong/i);
  });
});
