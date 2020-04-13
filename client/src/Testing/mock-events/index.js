import { build, fake } from 'test-data-bot';

export const mockAgencyBuilder = build('Agencies').fields({
  id: fake(f => f.random.number()),
  address: fake(f => f.address.streetAddress()),
  city: fake(f => f.address.city()),
  state: fake(f => f.address.state()),
  zip: fake(f => f.address.zipCode()),
  phone: fake(f => f.phone.phoneNumber()),
  name: fake(f => f.random.word()),
  nickname: fake(f => f.random.word()),
  events: [],
});

export const mockEventsBuilder = build('Events').fields({
  id: fake(f => f.random.number()),
  address: fake(f => f.address.streetAddress()),
  city: fake(f => f.address.city()),
  state: fake(f => f.address.state()),
  zip: fake(f => f.address.zipCode()),
  latitude: fake(f => f.address.latitude()),
  longitude: fake(f => f.address.longitude()),
  agency_id: fake(f => f.random.number()),
  name: fake(f => f.random.word()),
  service: fake(f => f.random.word()),
  event_dates: [],
});

export const mockEventDatesBuilder = build('EventDates').fields({
  id: fake(f => f.random.number()),
  event_id: fake(f => f.random.number()),
  start_time: '08:00 AM',
  end_time: '11:00 AM',
  date: fake(f => f.date.future()),
});

export const mockAgency = mockAgencyBuilder();
export const mockEvent = mockEventsBuilder();
export const mockEventDate = mockEventDatesBuilder();

const agency1 = mockAgencyBuilder();
const agency2 = mockAgencyBuilder();
const event1 = mockEventsBuilder();
const event2 = mockEventsBuilder();
const event3 = mockEventsBuilder();
const eventDate1 = mockEventDatesBuilder();
const eventDate2 = mockEventDatesBuilder();
const eventDate3 = mockEventDatesBuilder();
export const testData = [
  { ...agency1, events: [{ ...event1, event_dates: [{ ...eventDate1 }] }] },
  { ...agency2, events: [{ ...event2, event_dates: [{ ...eventDate2 }] }] },
];

export const testDataWithMultiple = [
  { ...agency1, events: [{ ...event1, event_dates: [{ ...eventDate1 }] }] },
  {
    ...agency2,
    events: [
      {
        ...event2,
        event_dates: [{ ...eventDate2, date: eventDate1.date }],
      },
      {
        ...event3,
        event_dates: [{ ...eventDate3 }],
      },
    ],
  },
];

export const preformattedEventData = {
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
};
