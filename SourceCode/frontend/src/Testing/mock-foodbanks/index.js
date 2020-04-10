import { build, fake } from 'test-data-bot';

const mockFoodBankBuilder = build('Food Bank').fields({
  address: fake(f => f.address.streetAddress()),
  city: fake(f => f.address.city()),
  state: fake(f => f.address.state()),
  zip: fake(f => f.address.zipCode()),
  name: fake(f => f.random.word()),
  nickname: fake(f => f.random.word()),
  display_url: fake(f => f.internet.url()),
  fb_agency_locator_url: fake(f => f.internet.url()),
  fb_url: fake(f => f.internet.url()),
  fb_fano_url: fake(f => f.internet.url()),
});

const mockFoodBankEventAddressBuilder = build('Food Bank Event').fields({
  id: fake(f => f.random.number()),
  address: fake(f => f.address.streetAddress()),
  city: fake(f => f.address.city()),
  state: fake(f => f.address.state()),
  zip: fake(f => f.address.zipCode()),
  phone: fake(f => f.phone.phoneNumber()),
  name: fake(f => f.random.word()),
  nickname: fake(f => f.random.word()),
  event_dates: []
});

const mockEventBuilder = build('Event Dates').fields({
  id: fake(f => f.random.number()),
  service: fake(f => f.random.word()),
  start_time: fake(f => f.date.future()),
  end_time: fake(f => f.date.future()),
  date: fake(f => f.date.future()),
});

export const mockFoodBank = mockFoodBankBuilder();
export const mockFoodBankEventAddress = mockFoodBankEventAddressBuilder();
export const mockEvent = mockEventBuilder();
