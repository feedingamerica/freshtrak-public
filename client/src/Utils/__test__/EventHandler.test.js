import { EventHandler } from '../EventHandler';
import { mockAgencyBuilder, mockEventsBuilder, mockEventDatesBuilder } from '../../Testing';

test('should handle bad or empty data', () => {
  expect(EventHandler(null)).toEqual([]);
  expect(EventHandler([])).toEqual([]);
});

test('should return an array of events', () => {
  const agancy1 = mockAgencyBuilder();
  const event1 = mockEventsBuilder();
  const eventDate1 = mockEventDatesBuilder();
  const expected = [
    {
      id: eventDate1.id,
      eventId: eventDate1.event_id,
      startTime: eventDate1.start_time,
      endTime: eventDate1.end_time,
      date: eventDate1.date,
      eventAddress: event1.address,
      eventState: event1.state,
      eventZip: event1.zip,
      phoneNumber: agancy1.phone,
      agancyName: agancy1.name,
      eventName: event1.name,
      eventService: event1.service,
    }
  ];
  const testData = [{ ...agancy1, events: [{ ...event1, event_dates: [{ ...eventDate1 }] }] }];
  expect(EventHandler(testData)).toEqual(expected);
});
