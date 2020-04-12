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

export const mockFoodBank = mockFoodBankBuilder();
