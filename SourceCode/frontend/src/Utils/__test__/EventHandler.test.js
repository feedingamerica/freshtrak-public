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

test('should return an array of events with mulitple agencies and one with no events', () => {
  const agancy1 = mockAgencyBuilder();
  const agancy2 = mockAgencyBuilder();
  const event1 = mockEventsBuilder();
  const event2 = mockEventsBuilder();
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
  const testData = [
    { ...agancy1, events: [{ ...event1, event_dates: [{ ...eventDate1 }] }] },
    { ...agancy2, events: [event2] },
  ];
  expect(EventHandler(testData)).toEqual(expected);
});

test('should return an array of events with mulitple agencies and multiple events', () => {
  const agancy1 = mockAgencyBuilder();
  const agancy2 = mockAgencyBuilder();
  const event1 = mockEventsBuilder();
  const event2 = mockEventsBuilder();
  const eventDate1 = mockEventDatesBuilder();
  const eventDate2 = mockEventDatesBuilder();
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
    },
    {
      id: eventDate2.id,
      eventId: eventDate2.event_id,
      startTime: eventDate2.start_time,
      endTime: eventDate2.end_time,
      date: eventDate2.date,
      eventAddress: event2.address,
      eventState: event2.state,
      eventZip: event2.zip,
      phoneNumber: agancy2.phone,
      agancyName: agancy2.name,
      eventName: event2.name,
      eventService: event2.service,
    }
  ];
  const testData = [
    { ...agancy1, events: [{ ...event1, event_dates: [{ ...eventDate1 }] }] },
    { ...agancy2, events: [{ ...event2, event_dates: [{ ...eventDate2 }] }] },
  ];
  expect(EventHandler(testData)).toEqual(expected);
});
