import React from 'react';
import { render } from '@testing-library/react';
import EventCardComponent from '../EventCardComponent';
import { preformattedEventData } from '../../../Testing';

test('should display the events', () => {
  const { getByText } = render(<EventCardComponent event={preformattedEventData}/>);
  getByText(preformattedEventData.agencyName);
  getByText(preformattedEventData.eventName);
  getByText(preformattedEventData.eventService);
});
