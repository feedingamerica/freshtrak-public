import React from 'React';
import { render } from '@testing-library/react';
import EventListComponent from '../EventListComponent';
import { preformatedEventData } from '../../../Testing';

test('should render that there are no events scheduled if an empty object is passed to it', () => {
  const { getByText } = render(<EventListComponent events={{}} />);
  getByText('No Events Currently Scheduled');
});

test('should display the data if data is passed to it', () => {
  const testData = { [preformatedEventData.date]: [preformatedEventData] };
  const { getByText } = render(<EventListComponent events={testData} />);
  getByText(preformatedEventData.agancyName);
});
