import React from 'react';
import { render } from '@testing-library/react';
import EventCardComponent from '../EventCardComponent';
import { preformatedEventData } from '../../../Testing';

test('should display the events', () => {
  const { getByText } = render(<EventCardComponent event={preformatedEventData}/>);
  getByText(preformatedEventData.agancyName);
  getByText(preformatedEventData.eventName);
  getByText(preformatedEventData.eventService);
});
