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
  pt_latitude: fake(f => f.address.latitude()),
  pt_longitude: fake(f => f.address.longitude()),
  loc_id: fake(f => f.random.number()),
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
