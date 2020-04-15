import React from 'React';
import { render } from '@testing-library/react';
import EventListComponent from '../EventListComponent';
import { preformattedEventData } from '../../../Testing';

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

test('should render that there are no events scheduled if an empty object is passed to it', () => {
  const { getByText } = render(<EventListComponent events={{}} />);
  getByText('No Events Currently Scheduled');
});

test('should display the data if data is passed to it', () => {
  const testData = { [preformattedEventData.date]: [preformattedEventData] };
  const { getByText } = render(<EventListComponent events={testData} />);
  getByText(preformattedEventData.agencyName);
});
