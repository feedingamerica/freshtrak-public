import { EventHandler, EventObjectBuilder, AgencyHandler } from '../EventHandler';
import { mockAgencyBuilder, mockEventsBuilder, mockEventDatesBuilder, mockAgency, mockEvent, mockEventDate } from '../../Testing';

test('should handle bad or empty data', () => {
  expect(EventHandler(null)).toEqual({});
  expect(EventHandler([])).toEqual({});
});

test('should return an array of events', () => {
  const agency1 = mockAgencyBuilder();
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
      eventCity: event1.city,
      eventState: event1.state,
      eventZip: event1.zip,
      phoneNumber: agency1.phone,
      agencyName: agency1.name,
      eventName: event1.name,
      eventService: event1.service,
    }
  ];
  const testData = [{ ...agency1, events: [{ ...event1, event_dates: [{ ...eventDate1 }] }] }];
  expect(AgencyHandler(testData)).toEqual(expected);
});

test('should return an array of events with mulitple agencies and one with no events', () => {
  const agency1 = mockAgencyBuilder();
  const agency2 = mockAgencyBuilder();
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
      eventCity: event1.city,
      eventState: event1.state,
      eventZip: event1.zip,
      phoneNumber: agency1.phone,
      agencyName: agency1.name,
      eventName: event1.name,
      eventService: event1.service,
    }
  ];
  const testData = [
    { ...agency1, events: [{ ...event1, event_dates: [{ ...eventDate1 }] }] },
    { ...agency2, events: [event2] },
  ];
  expect(AgencyHandler(testData)).toEqual(expected);
});

test('should return an array of events with multiple agencies and multiple events', () => {
  const agency1 = mockAgencyBuilder();
  const agency2 = mockAgencyBuilder();
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
      eventCity: event1.city,
      eventState: event1.state,
      eventZip: event1.zip,
      phoneNumber: agency1.phone,
      agencyName: agency1.name,
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
      eventCity: event2.city,
      eventState: event2.state,
      eventZip: event2.zip,
      phoneNumber: agency2.phone,
      agencyName: agency2.name,
      eventName: event2.name,
      eventService: event2.service,
    }
  ];
  const testData = [
    { ...agency1, events: [{ ...event1, event_dates: [{ ...eventDate1 }] }] },
    { ...agency2, events: [{ ...event2, event_dates: [{ ...eventDate2 }] }] },
  ];
  expect(AgencyHandler(testData)).toEqual(expected);
});

test('should sort events into dates', () => {
  const agency1 = mockAgencyBuilder();
  const agency2 = mockAgencyBuilder();
  const event1 = mockEventsBuilder();
  const event2 = mockEventsBuilder();
  const eventDate1 = mockEventDatesBuilder();
  const eventDate2 = mockEventDatesBuilder();
  const expected = {
    [eventDate1.date]: [
      {
        id: eventDate1.id,
        eventId: eventDate1.event_id,
        startTime: eventDate1.start_time,
        endTime: eventDate1.end_time,
        date: eventDate1.date,
        eventAddress: event1.address,
        eventCity: event1.city,
        eventState: event1.state,
        eventZip: event1.zip,
        phoneNumber: agency1.phone,
        agencyName: agency1.name,
        eventName: event1.name,
        eventService: event1.service,
      },
      {
        id: eventDate2.id,
        eventId: eventDate2.event_id,
        startTime: eventDate2.start_time,
        endTime: eventDate2.end_time,
        date: eventDate1.date,
        eventAddress: event2.address,
        eventCity: event2.city,
        eventState: event2.state,
        eventZip: event2.zip,
        phoneNumber: agency2.phone,
        agencyName: agency2.name,
        eventName: event2.name,
        eventService: event2.service,
      }
    ]
  };
  expect(
    EventObjectBuilder(
      AgencyHandler([
        { ...agency1, events: [{ ...event1, event_dates: [{ ...eventDate1 }] }] },
        { ...agency2, events: [{ ...event2, event_dates: [{ ...eventDate2, date: eventDate1.date }] }] },
      ])
    )
  ).toEqual(expected);
});

test(`should return a final object sorted by events_date's date`, () => {
  const shouldBeFirst = { ...mockAgency, events: [{ ...mockEvent , event_dates: [{ ...mockEventDate, date: '2020-04-01' }] }] };
  const shouldBeSecond = { ...mockAgency, events: [{ ...mockEvent , event_dates: [{ ...mockEventDate, date: '2020-04-15' }] }] };
  const testData = [shouldBeSecond, shouldBeFirst];
  const expected = {
    [shouldBeFirst.events[0].event_dates[0].date]: [
      {
        agencyName: mockAgency.name,
        date: "2020-04-01",
        endTime: mockEventDate.end_time,
        eventAddress: mockEvent.address,
        eventCity: mockEvent.city,
        eventId: mockEventDate.event_id,
        eventName: mockEvent.name,
        eventService: mockEvent.service,
        eventState: mockEvent.state,
        eventZip: mockEvent.zip,
        id: mockEventDate.id,
        phoneNumber: mockAgency.phone,
        startTime: mockEventDate.start_time,
      },
    ],
    [shouldBeSecond.events[0].event_dates[0].date]: [
      {
        agencyName: mockAgency.name,
        date: "2020-04-15",
        endTime: mockEventDate.end_time,
        eventAddress: mockEvent.address,
        eventCity: mockEvent.city,
        eventId: mockEventDate.event_id,
        eventName: mockEvent.name,
        eventService: mockEvent.service,
        eventState: mockEvent.state,
        eventZip: mockEvent.zip,
        id: mockEventDate.id,
        phoneNumber: mockAgency.phone,
        startTime: mockEventDate.start_time,
      },
    ],
  }
  expect(EventHandler(testData)).toEqual(expected);
});
